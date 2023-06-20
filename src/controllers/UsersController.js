import { UsersModel } from "../models/UsersModel.js";

const userModel = new UsersModel()

export class UsersController{
    async getUsers(req, res){
        try{
            const users = await userModel.listUsers()
            res.json(users);
        }catch(error){
            console.error('Error getting movies: ', error);
            throw error;
        }
    }

    async createUser(req, res){
        try{
            const { name, username, email, password } = req.body
            
            if(!name || !username || !email || !password){
                return res.status(400).send({
                    message: 'Submit all fields to create a new User!'
                })
            }

            await userModel.createUser({
                name,
                username,
                email,
                password
            })

            res.status(201).send({
                message: 'User created successfully'
            })
        }catch(error){
            console.error('Error creating a user: ', error)
            throw error
        }
    }

    async getUserById(req, res){
        try{
            const { id } = req.params
            const user = await userModel.findUserById(id)
            res.json(user)
        }catch(error){
            console.error('Error gettiong a user: ', error)
            throw error;
        }
    }

    async updateUser(req, res){
        try{
            const { id } = req.params
            const { name, username, email, password} = req.body

            if(!name && !username && !email && !password){
                return res.status(400).send({
                    message: 'Submit at least one field to update the User!'
                })
            }

            const docUser = {
                name,
                username,
                email,
                password
            }

            const user = await userModel.updateUser(id, docUser)
            res.json({
                _id: id,
                message: 'Updated successfully'
            })
        }catch(error){
            console.error('Error updating the user: ', error)
            throw error
        }
    }

    async deleteUser(req, res){
        try{
            const { id } = req.params
            const user = await userModel.deleteUser(id)
            res.json({
                _id: id,
                message: 'User deleted successfully'
            })
        }catch(error){
            console.error('Error deleting a user: ', error)
            throw error
        }
    }
}