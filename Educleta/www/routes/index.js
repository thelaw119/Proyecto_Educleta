const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/nosotros', (req, res) => {
  res.render('nosotros');
  console.log(res);
});

router.get('/mision_vision', (req, res) => {
  res.render('mision_vision', { title: 'mision vision Page' });
});

router.get('/aliados', (req, res) => {
  res.render('aliados', { title: 'aliados Page' });
});

router.get('/prensa', (req, res) => {
  res.render('prensa', { title: 'prensa Page' });
});

router.get('/servicios', (req, res) => {
  res.render('servicios', { title: 'servicios Page' });
});

router.get('/noticias', (req, res) => {
  res.render('noticias', { title: 'noticias Page' });
});

router.get('/academia', (req, res) => {
  res.render('academia', { title: 'academia Page' });
});

router.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'contacto Page' });
});



module.exports = router;