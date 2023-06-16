import express from 'express'
import movieRouter from './routes/moviesRoutes.js'

const app = express()

const port = 3000 || process.env.PORT

app.use(express.json())

app.use('/movies', movieRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})