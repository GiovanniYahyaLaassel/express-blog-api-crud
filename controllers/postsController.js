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
const getPostSlugOrTag = (req, res) => {
    const param = req.params.slug;  //ottengo lo slug
    const post = posts.find(p => p.slug === param); // trovo il post che corrisponde 

    if(post) {
        console.log(`Richiesta GET su /posts/ ${param} (slug) `); //monitoro la richiesta
        res.json(post);
    } 

    const filteredPosts = posts.filter(p => p.tags.includes(param)); 
    
    if (filteredPosts.length > 0 ) {
        console.log(`Richiesta GET su /posts/ ${param} (tag) `);
        return res.json(filteredPosts);
    }

        console.log(`Nessun post trovato slug o tag ${param}`);
        res.status(404).json({error: `Nessun post trovato slug o tag ${param}`});
};

module.exports = {getAllPosts, getPostSlugOrTag};