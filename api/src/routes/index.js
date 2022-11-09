const { Router } = require('express');
const { getAllCountries, getCountries } = require('../Controllers/getAllCountries');
const { getCountriesDetail } = require('../Controllers/getCountriesDetail');
const { postActivity } = require('../Controllers/postActivity');
const { getAllCountriesInDb } = require('../Controllers/savedCountries');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries',getCountries)
router.get('/countries/:id', getCountriesDetail)
router.post('/activities',postActivity)

module.exports = router;
