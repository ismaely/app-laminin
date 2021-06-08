const express = require("express");
const router = express.Router();
const Consultor = require("../model/consultor");
const History = require("../model/historico");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

/**
 * Routa para validar o login
 */
router.post("/login", async (req, res) => {
  const resultado = await Consultor.findOne(
    { email: req.body.email },
    (err, user) => {
      if (!user || !user.comparePassword(req.body.password)) {
        return res.status(400).json({ message: "Autenticação falhou..." });
      }
      return res.json({
        token: jwt.sign(
          { email: user.email, nome: user.nome, _id: user._id },
          process.env.SECRET
        ),
      });
    }
  );
});

/**
 * Routa para listar todos preços
 */
router.get("/listar-produto", async (req, res) => {
  await History.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

/**
 * listar todos consultor
 */
router.get("/listar-consultor", async (req, res) => {
  await Consultor.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

/**
 * Routa de pesquisa
 */
router.get("/pesquisa/:nome", async (req, res) => {
  try {
    const pesquisa = await History.find({
      $or: [{ mercado: req.params.nome }, { nome_produto: req.params.nome }],
    });
    if (pesquisa == null) {
      return res.status(404).json({ message: "Não existe dados da pesquisa" });
    } else {
      res.json(pesquisa);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

/**
 * Routa de registro do consultor
 */
router.post("/registar-consultor", async (req, res) => {
  const query = new Consultor({
    nome: req.body.nome,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const result = await query.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * Routa para registar o historico dos produto
 */
router.post("/registar-produto", async (req, res) => {
  const query = new History({
    mercado: req.body.mercado,
    nome_produto: req.body.nome_produto,
    data_insercao: req.body.data_insercao,
    preco_produto: req.body.preco_produto,
  });
  try {
    const result = await query.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
