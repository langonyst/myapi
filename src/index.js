import express from 'express'
import movieRouter from './routes/moviesRoutes.js'

const app = express()

app.use(express.json())

app.use('/movies', movieRouter)

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})