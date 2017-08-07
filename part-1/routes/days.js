const express = require('express');
const router = express.Router();

const daysOfWeek = {
  monday: 1,
  tuesday:2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};

router.get('/', (req, res) => {
  res.send('Welcome to the days route!');
})

router.get('/:day', (req, res) => {
  const day = req.params.day;

  if (day !== 'monday' &&
    day !== 'tuesday' &&
    day !== 'wednesday' &&
    day !== 'thursday' &&
    day !== 'friday' &&
    day !== 'saturday' &&
    day !== 'sunday')
    res.send(`${req.params.day} is not a valid day.`);

  res.append('Content-Type', 'application/text');
  res.status(200).send(`${daysOfWeek[day]}`);
})

module.exports = router;
