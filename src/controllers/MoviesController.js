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
}