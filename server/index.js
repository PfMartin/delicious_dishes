// Express server for the app
const express = require('express');
const app = express();

const cors = require('cors');

const database = require('./db.js');
const addRecipe = database.addRecipe;
const getRecipes = database.getRecipes;

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
    const { title, prepTime, servings, category, source, link, ingredientList, stepsList } = await req.body;

    const listOfIngredients = ingredientList.map((e) => {
      return (`${e.amount} ${e.ingredient}`);
    });
    const listOfSteps = stepsList.map((e) => {
      return e.step
    })

    const prepSteps = listOfSteps.join('|');
    const ingredients = listOfIngredients.join('|');


    await addRecipe(title, prepTime, servings, category, source, link, ingredients, prepSteps);

    console.log(title, prepTime, servings, category, source, link, ingredientList, stepsList);

    res.send('Success');

    console.log(`Website has been added: ${req.body}`);

  } catch(err) {
    console.error(err.message);
  }
})

app.get('/getRecipes', async(req,res) => {
  try{
    let allRecipes = await getRecipes();

    allRecipes.forEach((element) => {
      element.ingredients = element.ingredients.split('|');

      element.prepsteps = element.prepsteps.split('|');
    })

    console.log(allRecipes);
    
    res.json(allRecipes);
  } catch(err) {
    console.error(err.message);
  }
})

const port = 5000;
// const host = '192.168.178.26'; //Pi
const host = 'localhost';


app.listen(port, host, () => {
  console.log(`Server has started on ${host}:${port}`)
});
