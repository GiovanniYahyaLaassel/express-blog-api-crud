const posts = require('../public/posts');


// funzione
const getAllPosts = (req, res) => {
    console.log('Richiesta GET su /posts');
    res.json({
        count: posts.length,
        posts: posts,
    });
};

// funzione
const getPostSlug = (req, res) => {
    const slug = req.params.slug;  //ottengo lo slug
    const post = posts.find(p => p.slug === slug); // trovo il post che corrisponde 

    if(post) {
        console.log(`Richiesta GET su /posts/ ${slug} `); //monitoro la richiesta
        res.json(post);
    } else {
        console.log(`Post con ${slug} non trovato`);
        res.status(404).json({error: 'Post non trovato'});
    }
};

module.exports = {getAllPosts, getPostSlug};