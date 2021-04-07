// Express server for the app
const express = require('express');
const app = express();

const cors = require('cors');

const database = require('./db.js');
const addRecipe = database.addRecipe;
const getRecipes = database.getRecipes;
const getRecipe = database.getRecipe;
const updateRecipe = database.updateRecipe;
const deleteRecipe = database.deleteRecipe;

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
    let { title, preptime, servings, category, source, link, ingredients, steps } = await req.body;

    const listOfIngredients = ingredients.map((e) => {
      return (`${e.amount},${e.ingredient}`);
    });
    const listOfSteps = steps.map((e) => {
      return e.step
    })

    prepSteps = listOfSteps.join('|');
    ingredients = listOfIngredients.join('|');


    await addRecipe(title, preptime, servings, category, source, link, ingredients, prepSteps);

    console.log(title, preptime, servings, category, source, link, ingredients, steps);

    res.send('Success');

    console.log(`Website has been added: ${req.body}`);

  } catch(err) {
    console.error(err.message);
  }
})

app.put('/updateRecipe/:id', async(req, res) => {
  try {
    const { id } = req.params;

    let { title, preptime, servings, category, source, link, ingredients, prepsteps } = await req.body;

    const listOfIngredients = ingredients.map((e) => {
      return (`${e.amount},${e.ingredient}`);
    });
    const listOfSteps = prepsteps.map((e) => {
      return e.step
    })

    prepsteps = listOfSteps.join('|');
    ingredients = listOfIngredients.join('|');


    await updateRecipe(id, title, preptime, servings, category, source, link, ingredients, prepsteps);

    // console.log(title, preptime, servings, category, source, link, ingredients, prepsteps);

    res.send('Success');

    console.log(`Website has been added: ${req.body}`);

  } catch(err) {
    console.error(err.message);
  }
})

app.delete('/deleteRecipe/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await deleteRecipe(id);

    res.json('Recipe deleted');

    console.log('Deleted');
  } catch(err) {
    console.error(err.message);
  }
})

app.get('/getRecipes', async(req,res) => {
  try{
    let allRecipes = await getRecipes();

    allRecipes.forEach((element) => {
      let ingredientsList = element.ingredients.split('|');

      let ingredients = [];

      ingredientsList.forEach((element) => {
        let ingredientObject = {};
        ingredientObject.amount = element.split(',')[0];
        ingredientObject.ingredient = element.split(',')[1];

        ingredients.push(ingredientObject);
      })

      let prepstepsList = element.prepsteps.split('|');

      let prepsteps = [];

      prepstepsList.forEach((element) => {
        let stepObject = {};
        stepObject.step = element;

        prepsteps.push(stepObject);
      })

      element.ingredients = ingredients;
      element.prepsteps = prepsteps;
    });

    res.json(allRecipes);
  } catch(err) {
    console.error(err.message);
  }
})

app.get('/getRecipes/:id', async(req, res) => {
  try {
    const { id } = req.params; // Get the id from req.params
    let recipe = await getRecipe(id);

    console.log(recipe);

    recipe.forEach((element) => {
      let ingredientsList = element.ingredients.split('|');
      let ingredients = [];

      ingredientsList.forEach((element) => {
        let ingredientObject = {};
        ingredientObject.amount = element.split(',')[0];
        ingredientObject.ingredient = element.split(',')[1];

        ingredients.push(ingredientObject);
      })

      let prepstepsList = element.prepsteps.split('|');
      let prepsteps = [];

      prepstepsList.forEach((element) => {
        let stepObject = {};
        stepObject.step = element;

        prepsteps.push(stepObject);
      })

      element.ingredients = ingredients;
      element.prepsteps = prepsteps;
    })

    res.json(recipe);
  } catch(err) {
    console.error(err.message);
  }
})

const port = 5000;
const host = '192.168.178.26'; //Pi
// const host = '192.168.178.26';


app.listen(port, host, () => {
  console.log(`Server has started on ${host}:${port}`)
});
