const express = require('express');
const router = express.Router();
const controles = require('../routes/controles/controles');

const cars = require('../modes/index');




router.post('/addcars',controles.addacar);

router.get('/showcars',controles.showcar);


router.put('/updatecar/:carindex',controles.updatecar);


router.get('/getcar/:carindex',controles.showcarbyid);

router.get('/cars',controles.webpage);

router.delete('/deletecar/:carindex',controles.deletecar);
    

module.exports = router;