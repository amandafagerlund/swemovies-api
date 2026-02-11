var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var filmModel = require('../models/filmModel.js');

//Använder GET request och respons för att hämta datan.
router.get('/', function (req, res, next) {

  //Hittar filmernas data med find.
  filmModel.find().then(function (filmerna) {

    // Vid korrekt koppling skickar datan i jsonformat.
    res.json(filmerna);
  });

});

module.exports = router;