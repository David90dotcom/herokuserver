if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// require Web-Framework express for APIs (application programming interface)
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

// input route into server
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

// implement mongoose as testserver
const mongoose = require('mongoose')
// past URL in ...
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true})
    // database connection
    const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))



// use route of router
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)