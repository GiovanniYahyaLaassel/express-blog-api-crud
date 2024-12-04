// Importo express
const express = require('express');
// importo le funzioni dal controller 
const {index, show, destroy, store } = require('../controllers/postsController');

// creo un'istanza una configurazione 
const router = express.Router();  

// importo l'array dei posto
const posts = require('../public/posts');

// Index che mi restituisce la lista in formato jsson
router.get('/', index);

// Show che mi restituisce un singolo post 
router.get('/:slug', show);


//destroy elimino un posts 
router.delete('/:slug', destroy);

// store per un nuovo post 
router.post('/', store);




module.exports = router;

// router.get('/', (req, res) => {
//     console.log('Richiesta GET su /posts');  //verifico la chiamata 
//     res.send('Lista dei post');  //risposta che mi conferma la chiamata 
// });

// esporto il router per usarlo i altri file
