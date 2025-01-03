const express = require('express')
const app = express()
const db = require('./db')
const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.get('/',function(req,res) {
    res.send('Welcome to my hotel')
})

app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(3000, () => {
    console.log('Listening on port 3000');
})