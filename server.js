const express = require('express')
const createError = require('http-errors')
const studentRoutes = require('./src/student/routes')
const errHandler = require('./helper/errorHandler')

const app = express()

const Port = 3000
app.use(express.json())

app.get('/', (req, res) => { res.send('Simple API homepage'); })
app.use('/api/v1/students', studentRoutes)


app.use(async (req, res, next) => { next(createError.NotFound()) })
app.use(errHandler)

app.listen(Port, () => console.log(`Server up and running on ${Port}`))
