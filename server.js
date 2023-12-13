const express = require('express')
const createError = require('http-errors')
const studentRoutes = require('./src/student/routes')
const empRoutes = require('./src/employee/routes')
const errHandler = require('./helper/errorHandler')
const session = require('express-session')
const app = express()

const Port = 3000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(session({ secret: 'secret key', saveUninitialized: true, resave: false }))
app.use('/', empRoutes)
app.use('/api/v1/students', studentRoutes)

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next()
})
app.use(express.static("uploads"))
app.set('view engine', 'ejs')
app.use(async (req, res, next) => { next(createError.NotFound()) })
app.use(errHandler)

app.listen(Port, () => console.log(`Server up and running on ${Port}`))
