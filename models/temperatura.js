
const { Schema, model } = require('mongoose');

const TemperaturaSchema = Schema({
    fecha: {
        type: Date,
        required: [true, 'autogenerado'],
        default: Date()
    },
    camara: {
        type: String,
        required: [true, 'este dato es obligatorio'],

    },
    temperatura: {
        type: Number,
        required: [true, 'La contraseña es obligatoria'],
    },
});


module.exports = model( 'Temperatura', TemperaturaSchema );
