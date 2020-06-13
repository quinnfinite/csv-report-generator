const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

//MIDDLEWARE
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(express.json())
app.use(express.urlencoded())
//ROUTES
app.get('/', (req, res) => {
  res.sendFile('index')
});

app.post('/', (req, res) => {
  console.log('post request submitted')
  jsonToCSV(req.body["json-form"])
  //
  res.redirect('/')
});
//JSON to CSV function
var jsonToCSV = (jsonData) => {
  console.log('jsonData: ', jsonData)

}

//SERVER PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`)
})