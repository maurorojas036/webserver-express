const { response } = require('express');
const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

const app = express();

const port = process.env.PORT || 3000;

//Hago un carpeta publica
app.use(express.static(__dirname + '/public'));

//Seteo HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {


    res.render('home', {
        nombre: 'mauro'
    });


});

app.get('/about', (req, res) => {

    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`);
});