const { Router } = require('express');
const { temperaturasGet, temperaturasPost, temperaturasPut, temperaturasPatch, temperaturasDelete } = require('../controllers/temperaturas');

const router = Router();

router.get('/', temperaturasGet);

router.put('/:id', temperaturasPut);

router.post('/', temperaturasPost);

router.patch('/', temperaturasPatch);

router.delete('/', temperaturasDelete);


module.exports = router;