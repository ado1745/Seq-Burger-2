const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
  res.redirect('/burgers');
});

router.get('/burgers', (req, res) => {
  db.Burger.findAll().then(dbBurger => {
    console.log(dbBurger);
    var hbsObject = { burger: dbBurger };
    return res.render('index', hbsObject);
  });
});

router.post('/burgers/create', (req, res) => {
  db.Burger.create({
    burger_name: req.body.burger_name,
  }).then(dbBurger => {
    console.log(dbBurger);
    res.redirect('/');
  });
});

router.put('/burgers/update/:id', (req, res) => {
  db.Burger.update(
    {
      devoured: true,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then(dbBurger => {
    res.json('/');
  });
});

module.exports = router;
