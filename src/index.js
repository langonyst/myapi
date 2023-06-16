import express from 'express'
import movieRouter from './routes/moviesRoutes.js'
import swaggerRouter from './routes/swagger.cjs'

const app = express()

const port = 3000 || process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Para visualizar os endpoints acesse http://link.com/doc'
    })
})

app.use('/movies', movieRouter)
app.use('/doc', swaggerRouter)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})