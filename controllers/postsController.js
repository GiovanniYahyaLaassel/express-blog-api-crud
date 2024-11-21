const posts = require('../data/postsData');
const { post } = require('../routers/posts');


// funzione (index)
const index = (req, res) => {
    console.log('Richiesta GET su /posts');
    res.json({
        count: posts.length,
        posts: posts,
    });
};

// funzione (show)
const show = (req, res) => {
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

const destroy = (req, res) => {
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

// funzione (store per creare un nuovo post)
const store = (req,res) => {
    console.log('Dati ricevuti nel body:',req.body);  //dati in arrivo
    // ottengo i dati
    const {title, slug, content, image, tags} = req.body;

    // verifico i campi
    if (!title || !slug || !content) {
        return res.status(400).json({error:'Title, slug e content sono obbligatori '});
    }

    // creo il nuovo post 
    const newPost = {
        id: posts.length +1,
        title,
        slug,
        content,
        image: image || 'default.jpeg',
        tags: tags || []
    };

    posts.push(newPost);

    console.log('Nuovo post creato:', newPost);

    res.status(201).json(newPost);
}

module.exports = { index, show, destroy, store };