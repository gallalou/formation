const app = require('./app');
const mongoose = require('mongoose');
const {} = require("dotenv").config();

const mongooseString = process.env.DATA_BASE_URL;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongooseString)
.then( () => { 
    console.log("Connexion DB OK");
    const server = app.listen(PORT, () => {
        console.log('Serveur lancé avec succès !!');
    })
})
.catch( () => console.log("connexion DB not OK"));
