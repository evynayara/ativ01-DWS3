const express = require('express');
const router = express.Router();
const ctlSalasDeAula = require('../controller/ctlSalasDeAula');

router.get('/salasdeaula', ctlSalasDeAula.getAllSalasDeAula);
router.get('/salasdeaula/:id', ctlSalasDeAula.getSalasDeAulaByID);
router.post('/salasdeaula', ctlSalasDeAula.insertSalasDeAula);
router.put('/salasdeaula/:id', ctlSalasDeAula.updateSalasDeAula);
router.delete('/salasdeaula/:id', ctlSalasDeAula.deleteSalasDeAula);

module.exports = router;