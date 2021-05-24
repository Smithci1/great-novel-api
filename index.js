const express = require('express')
const { getAllAuthors, getAuthorbyid } = require('./controller/authors')
const { getAllBooks, getBookbyid } = require('./controller/books')
const { getAllGenres, getGenre } = require('./controller/genres')

const PORT = 1337
const app = express()

app.get('/authors', express.json(), getAllAuthors)
app.get('/authors/:id', express.json(), getAuthorbyid)

app.get('/books', express.json(), getAllBooks)
app.get('/books/:id', express.json(), getBookbyid)

app.get('/genres', express.json(), getAllGenres)
app.get('/genres/:id', express.json(), getGenre)

app.listen(PORT, () => console.log(`server runnning on port: http://localhost:${PORT}`))
