import { MongoClient } from 'mongodb';
//import { mongoURI } from '../../keys/keys.js';

const connectToMongo = async () => {
    const uri = process.env.mongo_uri;
    try{
        const client = new MongoClient(uri)

        await client.connect()

        console.log('Connected to remote Database')
        return client.db('sample_mflix')
    }catch(error){
        console.error('Error: ', error)
        throw error;
    }
}

export default connectToMongo
