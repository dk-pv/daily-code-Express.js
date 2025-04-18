const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('home page')
})
app.get('/product', (req, res) => {
    res.send('products list')
})
app.get('/about', (req, res) => {
    res.send('about page')
})
app.get('/contact', (req, res) => {
    res.send('Contact me ')
})
app.get('/product/1', (req, res) => {
    res.send('products1 details')
})
app.get('/product/2', (req, res) => {
    res.send('products2 details')
})
app.get('/product/3', (req, res) => {
    res.send('products2 details')
})


app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
