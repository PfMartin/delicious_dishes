const database = require('./db.js');
const addRecipe = database.addRecipe;
const getRecipes = database.getRecipes;
const getRecipe = database.getRecipe;

const printRecipe = async (id) => {
  const recipe = await getRecipe(id);

  console.log(recipe);
}

printRecipe(1);
