const path = require ('path')
const express = require('express')
const hbs = require('hbs')



const app = express()
const port = 3000

//define paths for express config
const pathDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//setup handler engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

//setup static directory to serve
app.use(express.static(pathDirectoryPath))

app.get('/home', (req, res) => {
    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Bello'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Anime',
        name: 'Bello'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contact',
        name: 'Bello',
    })
})



app.listen(port, () => {
    console.log('Server is up on: '+ port)
})