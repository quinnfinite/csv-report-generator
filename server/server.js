const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client')));

//ROUTES
app.get('/', (req, res) => {
  res.sendFile('index')
});

//SERVER PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})