const { response } = require('express');

const Temperatura = require('../models/temperatura');

const temperaturasGet = (req, res = response) => {

    
    res.json({
        msg: 'Get de peraturas corriendo'
    });
}



const temperaturasPost = async(req, res = response) => {

    const body = req.body;
    
    const temperatura = new Temperatura ( body );
    
    await temperatura.save();
    
    res.json({
        msg: 'Post de temperaturas corriendo',
        temperatura
    });
}


const temperaturasPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put de peraturas corriendo',
        id
    });
}


const temperaturasPatch = (req, res = response) => {

    res.json({
        msg: 'patch de peraturas corriendo'
    });
}

const temperaturasDelete = (req, res = response) => {

    res.json({
        msg: 'Delete de peraturas corriendo'
    });
}


module.exports ={
    temperaturasGet,
    temperaturasPost,
    temperaturasPut,
    temperaturasDelete,
    temperaturasPatch
}