const posts = require('../data/postsData');
const { post } = require('../routers/posts');


// funzione (index)
const getAllPosts = (req, res) => {
    console.log('Richiesta GET su /posts');
    res.json({
        count: posts.length,
        posts: posts,
    });
};

// funzione (show)
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

// funzione (destroy)

const deletePostsBySlug = (req, res) => {
    const slug = req.params.slug;
    const index = posts.findIndex(p => p.slug === slug); //trovo l'indice 

    if(index !== -1) {
        const deletedPosts = posts.splice(index, 1); // rimuovo il post degli array
        console.log(`Posts ${slug} elimniato . Lista aggiornata: ${posts}` );  
        res.status(204).send();
    } else {
        console.log(`Posts con slug ${slug} non trovato`);
        res.status(404).json({error: `Posts con slug ${slug} non trovato.`});
    }
}

module.exports = {getAllPosts, getPostSlugOrTag,  deletePostsBySlug };