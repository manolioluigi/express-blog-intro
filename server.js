const dotenv = require("dotenv").config();
const express = require("express");

const server = express();

//rotte
server.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})

//listen
server.listen(process.env.PORT || 3300, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})