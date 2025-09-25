console.log("Mi primera app en express");
require('dotenv').config();
const express = require('express');
const products = require('./Data/products');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// endpoints
// http://localhost:3000/
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success',
    })
});

// http://localhost:3000/products
app.get('/products', (req, res) => {
    res.json({
        message: 'Productos',
        timestamp: new Date().toISOString(),
        status: 'success',
        products: products
    });
});


app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});