const express = require('express');
const app = express();
const days = require('./routes/days');
const concat = require('./routes/concat');

const port = 3000;

app.use('/api/days', days);
app.use('/api/concat', concat);

app.listen(port, () => {
  console.log('Server is listening on', port);
});
