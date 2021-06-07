const mongoose = require('mongoose')

const mercadoSchema = new mongoose.Schema({
    nome_mercado: {
        type: String,
        required: true
    }
    
}) 

module.exports = mongoose.model('tbl_mercado', mercadoSchema)