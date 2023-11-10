const index = (posts, req, res) => {
    res.format({
        html: () => {
            const postListHtml = posts.map(post => `<li>${post.title}</li>`).join('');
            res.send(`<ul>${postListHtml}</ul>`);
        },
        json: () => {
            res.json(posts);
        }
    });
};

module.exports = {
    index
};