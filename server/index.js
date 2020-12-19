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

app.get('/getRecipe', async(req,res) => {
  try{
    const recipes = await getRecipe();
    res.json(recipes);
  } catch(err) {
    console.error(err.message);
  }
})

const port = 5000;
const host = '192.168.178.26';

app.listen(port, host, () => {
  console.log(`Server has started on ${host}:${port}`)
});
