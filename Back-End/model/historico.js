const mongoose = require("mongoose");
const historicoSchema = new mongoose.Schema({
  mercado: {
    type: String,
    required: true,
  },
  nome_produto: {
    type: String,
    required: true,
  },
  data_insercao: {
    type: Date,
    required: true,
    default: Date.now,
  },
  preco_produto: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("tbl_historico", historicoSchema);
