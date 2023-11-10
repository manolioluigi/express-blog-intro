const dotenv = require("dotenv").config();
const express = require("express");
const server = express();
const postsController = require("./controllers/posts.js");

//file statici
server.use(express.static("public"));

//rotte
server.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1><br><a href="http://localhost:3300/posts">Vai ai post</a>');
});


server.get('/posts', (req, res) => {
    postsController.index(req, res);
});


//listen
server.listen(process.env.PORT || 3300, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})