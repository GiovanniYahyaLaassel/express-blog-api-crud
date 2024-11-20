// Importo express
const express = require('express');

// creo un'istanza una configurazione 
const router = express.Router();  

// importo l'array dei posto
const posts = require('../public/posts');

// Index che mi restituisce la lista in formato jsson
router.get('/', (req, res) => {
    console.log('Richiesta GET su /posts');
    res.json({
        count: posts.length,
        posts: posts,
    });
});

// Show che mi restituisce un singolo post 
router.get('/:slug', (req, res) => {
    const slug = req.params.slug;  //ottengo lo slug
    const post = posts.find(p => p.slug === slug); // trovo il post che corrisponde 

    if(post) {
        console.log(`Richiesta GET su /posts/ ${slug} `); //monitoro la richiesta
        res.json(post);
    } else {
        console.log(`Post con ${slug} non trovato`);
        res.status(404).json({error: 'Post non trovato'});
    }
});




// router.get('/', (req, res) => {
//     console.log('Richiesta GET su /posts');  //verifico la chiamata 
//     res.send('Lista dei post');  //risposta che mi conferma la chiamata 
// });

// esporto il router per usarlo i altri file

module.exports = router;