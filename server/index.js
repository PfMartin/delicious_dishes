// Express server for the app
const express = require('express');
const app = express();

const cors = require('cors');

//Middleware
app.use(cors());
app.use(express.json()); //for req.body

/**************************************
ROUTES
**************************************/
app.get('/', async(req, res) => {
  try {
    res.send('<h1>Welcome to the Delicious Dishes App<h1>');
  } catch(err) {
    console.error(err.message);
  }
})

app.post('/addRecipe', async(req, res) => {
  try {
    res.send('<h1>Recipe has been added</h1>')
  } catch(err) {
    console.error(err.message);
  }
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
});
