import { ObjectId } from "mongodb";
import connectToMongo from "../db/dbConnect.js";

export class UsersModel {
    async listUsers(){
        try{
            const db = await connectToMongo()
            const users = await db.collection('users').find().limit(15).toArray()
            return users;
        }catch(error){
            console.error('Error listing movies: ', error);
            throw error;
        }
    }
    
    async findUserById(id){
        try{
            const db = await connectToMongo()
            const idUser = new ObjectId(id)
            const user = await db.collection('users').findOne({ _id: idUser })
            return user
        }catch(error){
            console.error('Error find user: ', error);
            throw error
        }
    }

    async createUser(doc){
        try{
            const db = await connectToMongo();
            const user = await db.collection('users').insertOne(doc)
            return user;
        }catch(error){
            console.error('Error creating a user: ', error)
            throw error
        }
    }

    async updateUser(id, doc){
        try{
            const db = await connectToMongo()
            const idUser = new ObjectId(id)
            const user = await db.collection('users').updateOne({_id: idUser}, {$set: doc})
            return user
        }catch(error){
            console.error('Error updating user: ', error)
            throw error
        }
    }

    async deleteUser(id){
        try{
            const db = await connectToMongo()
            const idUser = new ObjectId(id)
            await db.collection('users').deleteOne({_id: idUser})
            return true
        }catch(error){
            console.error('Error deleting a user: ', error)
            throw error
        }
    }
}