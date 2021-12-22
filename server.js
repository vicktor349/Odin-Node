const express = require('express');
const path = require('path')

const app = express()

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './pages/index.html'))
})
app.get('/about.html',(req,res) =>{
    res.sendFile(path.join(__dirname, './pages/about.html'))
})
app.get('/contact.html',(req,res) =>{
    res.sendFile(path.join(__dirname, './pages/contact-me.html'))
})
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, './pages/404.html'))
    res.status(404)
})
const PORT = 8000;

app.listen(PORT,() =>{
    console.log(`Server is listening to port ${PORT}`)
})