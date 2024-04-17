const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gallalou123:gallalou@cluster0.hodopj1.mongodb.net/')
.then( () => { 
    console.log("Connexion DB OK");
    const server = app.listen(3000, () => {
        console.log('Serveur lancé avec succès !!');
    })
})
.catch( () => console.log("connexion DB not OK"));
