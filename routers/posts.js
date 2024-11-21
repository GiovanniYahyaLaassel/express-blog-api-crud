// Importo express
const express = require('express');
// importo le funzioni dal controller 
const {getAllPosts, getPostSlugOrTag} = require('../controllers/postsController');

// creo un'istanza una configurazione 
const router = express.Router();  

// importo l'array dei posto
const posts = require('../public/posts');

// Index che mi restituisce la lista in formato jsson
router.get('/', getAllPosts);

// Show che mi restituisce un singolo post 
router.get('/:slug', getPostSlugOrTag);




// router.get('/', (req, res) => {
//     console.log('Richiesta GET su /posts');  //verifico la chiamata 
//     res.send('Lista dei post');  //risposta che mi conferma la chiamata 
// });

// esporto il router per usarlo i altri file

module.exports = router;

