const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'From the days of Romeo, the kingdom of women suffereth violence and only the violent men could take them by force',
        user: 'Charles',
        added: new Date(),
    },
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: "Message Board", messages: messages })
});

// GET form
router.get('/new', function (req, res, next) {
  res.render('form', {title: "Message Board"})
})

// POST message
router.post('/new', function (req, res, next) {
  messages.unshift({text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect('/');
})

module.exports = router;