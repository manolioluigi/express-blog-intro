const posts = require('../db/postsDb.js'); // Assicurati di specificare il percorso corretto

const index = (req, res) => {
    res.format({
        html: () => {
            const postListHtml = posts.map(post => `
                <li>
                    <h2>${post.title}</h2>
                    <img src="${post.image}" style="max-width: 500px;" alt="${post.title}">
                    <p>${post.content}</p>
                    <ul>${post.tags.map(tag => `<li>${tag}</li>`).join('')}</ul>
                </li>
            `).join('');
            res.send(`<a href="http://localhost:3300/">Torna alla home</a><br><ul>${postListHtml}</ul>`);
        },
        json: () => {
            res.json(posts);
        }
    });
};

module.exports = {
    index
};