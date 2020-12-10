// Express server for the app
const express = require('express');
const app = express();

const cors = require('cors');

const database = require('./db.js');
const addRecipe = database.addRecipe;
const getRecipe = database.getRecipe;

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
    const { title, prepTime, servings, category, source, link, ingredients, prepSteps } = await req.body;

    await addRecipe(title, prepTime, servings, category, source, link, ingredients, prepSteps);

    console.log(title, prepTime, servings, category, source, link, ingredients, prepSteps);

    res.send('Success');
    console.log(`Website has been added: ${req.body}`);
  } catch(err) {
    console.error(err.message);
  }
})

const port = 5000;

app.listen(port, () => {
  console.log(`Server has started on port ${port}`)
});
