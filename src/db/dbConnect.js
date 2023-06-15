import { MongoClient } from 'mongodb';
import { mongoURI } from '../../keys/keys.js';

const connectToMongo = async () => {
    const uri = mongoURI


    try{
        const client = new MongoClient(uri)

        await client.connect()

        console.log('Connected to remote Database')
        return client.db()
    }catch(error){
        console.error('Error: ', error)
        throw error;
    }
}

export default connectToMongo
