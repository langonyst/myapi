import express from 'express'
import connectToMongo from './db/dbConnect.js'

const app = express()

connectToMongo().then((db) => {

    app.get('/', (req, res) => {
        res.status(200).send({
            message: 'Puta merda, perai...'
        })
    })

    app.listen(3000, () => {
        console.log('Server listening on port 3000')
    })
}).catch((error) => {
    console.error('Error connection express: ' , error)
    process.exit(1)
})