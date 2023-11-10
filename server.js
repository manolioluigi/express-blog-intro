const dotenv = require("dotenv").config();
const express = require("express");
const server = express();
const postsController = require("./controllers/posts.js");

//array
let posts = [
    {
        title: "Viaggio in montagna",
        content: "Questa è la storia del mio emozionante viaggio in montagna. Sono rimasto senza parole di fronte alla bellezza dei panorami.",
        image: "/public/montagna.jpg",
        tags: ["viaggio", "montagna", "avventura"]
    },
    {
        title: "Ricetta della settimana",
        content: "Questa settimana condivido una deliziosa ricetta: lasagne fatte in casa con amore. Spero che vi piaccia!",
        image: "/public/lasagne.jpg",
        tags: ["cucina", "ricette", "lasagne"]
    },
    {
        title: "Esperienza di volontariato",
        content: "Ho trascorso il weekend facendo volontariato presso un rifugio per animali. È stato un'esperienza incredibilmente gratificante.",
        image: "/public/volontariato.jpg",
        tags: ["volontariato", "animali", "solidarietà"]
    },
    {
        title: "Consigli per la lettura",
        content: "Ecco alcune delle mie raccomandazioni di lettura preferite. Spero che troviate ispirazione in questi libri straordinari.",
        image: "/public/libri.jpg",
        tags: ["libri", "lettura", "consigli"]
    },
    {
        title: "Nuova avventura culinaria",
        content: "Ho sperimentato con una cucina etnica e voglio condividere la mia esperienza. Scoprirete nuovi sapori e aromi!",
        image: "/public/cucina.jpg",
        tags: ["cucina", "avventura", "sperimentazione"]
    }
];

//rotte
server.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>')
})

server.get('/posts', (req, res) => {
    postsController.index(posts, req, res);
});


//listen
server.listen(process.env.PORT || 3300, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
})