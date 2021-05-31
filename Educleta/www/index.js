/*INDEX CREADO PARA EJECUTARLO DESDE LA WEB
 Este codigo esta inhabilitado ya que solo se usara en android
 se puede descomentar para hacer pruebas en la web con Express y NODE.JS*/

//const express = require('express');
//const app = express();
//const morgan = require('morgan');
//const path = require('path');
//app.use(express.static(path.join(__dirname, 'www')));

//ESTO LO AGREGO PARA AGREGAR LAS IMAGENES Y VIDEOS EN LA WEB
//app.use('/assets',express.static('www'));


// settings
//app.set('port', process.env.PORT || 8888);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// middlewares
//app.use(morgan('dev'));


// routes
//app.use(require('./routes'));


/*app.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

app.get('/nosotros', (req, res) => {
  res.render('nosotros');
  //console.log(res.render('../views/nosotros.ejs'));
  //../views/nosotros.ejs
});*/


// static files
//app.use(express.static(path.join(__dirname, 'img')));
//console.log(path.join(__dirname, 'views'));
// listening the Server
//app.listen(app.get('port'), () => {
  //console.log('Server on port', app.get('port'));
//});