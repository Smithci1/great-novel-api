const express = require('express')
const { getAllAuthors, getAuthor } = require('./controller/authors')
const { getAllBooks, getBook } = require('./controller/books')
const { getAllGenres, getGenre } = require('./controller/genres')

const PORT = 1337
const app = express()

app.get('/authors', express.json(), getAllAuthors)
app.get('/authors/:search', express.json(), getAuthor)

app.get('/books', express.json(), getAllBooks)
app.get('/books/:search', express.json(), getBook)

app.get('/genres', express.json(), getAllGenres)
app.get('/genres/:search', express.json(), getGenre)

app.listen(PORT, () => console.log(`server runnning on port: http://localhost:${PORT}`))
