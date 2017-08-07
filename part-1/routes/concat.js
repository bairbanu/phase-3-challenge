const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Welcome to the array concater!');
})

router.post('/', (req, res) => {
  let concatedArray = [];

  for (key in req.body) {
    if (!Array.isArray(req.body[key]))
    res.status(400).send({"error": "Input data should be of type Array."});

    concatedArray = concatedArray.concat(req.body[key]);
  }

  res.send({ "result": concatedArray });
})

module.exports = router;
