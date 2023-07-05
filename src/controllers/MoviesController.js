import { MoviesModel } from "../models/MoviesModel.js";

const movieModel = new MoviesModel()

export class MoviesController {
    async getMovies(req, res){
        try{
            const movies = await movieModel.listMovies();
            res.json(movies);
        }catch(error){
            console.error('Error getting movies: ', error)
            throw error;
        }
    }

    async createMovie(req, res){
        try{
            const { title, year, rating, type, gender, plot, fullplot, directors} = req.body

            if(!title || !year || !rating || !type || !gender || !plot || !fullplot || !directors){
                return res.status(400).send({
                    message: 'Submit all fields to create a Movie!'
                })
            }

            await movieModel.createMovie({
                title,
                year,
                rating,
                type,
                gender,
                plot,
                fullplot,
                directors
            })

            res.status(201).send({
                message: 'Movie created successfully'
            })

        }catch(error){
            console.error('Error creating a movie: ', error)
            throw error
        }
    }

    async getMovieById(req, res){
        try{
            const { id } = req.params
            const movie = await movieModel.findMovieById(id)
            res.json(movie)
        }catch(error){
            console.error('Error getting a movie: ', error)
            throw error;
        }
    }

    async updateMovie(req, res){
        try{
            const { id } = req.params
            const { title, year, rating, type, gender, fullplot, plot, directors} = req.body

            if(!title && !year && !rating && !type && !gender && !fullplot && !plot && !directors){
                return res.status(400).send({
                    message: 'Submit at least one field to update the Movie!'
                })
            }
            const docMovie = {
                title,
                year,
                rating,
                type,
                gender,
                plot,
                fullplot,
                directors
            }

            const movie = await movieModel.updateMovie(id, docMovie)
            res.json({
                _id: id,
                message: 'Updated successfully'
            })
        }catch(error){
            console.error('Error updating the movie: ', error)
            throw error
        }
    }

    async deleteMovie(req, res){
        try{
            const { id } = req.params
            const movie = await movieModel.deleteMovie(id)
            res.json({
                _id: id,
                message: 'Movie deleted successfully'
            })
        }catch(error){
            console.error('Error deleting a movie: ', error)
            throw error;
        }
    }
}