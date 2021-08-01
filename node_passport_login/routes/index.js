const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

//Welcome Pae
router.get('/', (req, res) => res.render('welcome'));

//Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard'));

router.get('/studentdashboard',ensureAuthenticated, (req, res) =>
  res.render('studentdashboard', {
    name: req.user.name   // prenosi se ime korisnika da bi se u studentdashboard.ejs fajlu odstampala
  }));                    // levi name moze da bude i X, vazno je da u studentdashboard.ejs to isto bude X

router.get('/professordashboard',ensureAuthenticated, (req, res) =>
  res.render('professordashboard', {
    name: req.user.name
  }));

module.exports = router;
