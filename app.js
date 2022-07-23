const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.send('Hola mundo!')
})

app.get('/products', (req, res)=> {
    res.send('productos en construccion')
})

app.get('/peoples', (req, res)=> {
    res.send('En construcción')
})

app.listen(PORT, ()=> {
    console.log('listo')
})