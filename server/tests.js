const dataBaseFunctions = require('./db.js');
const getRecipes = dataBaseFunctions.getRecipes;

const getRecs = async() => {
  const allRecipes = await getRecipes();
  console.log(allRecipes);
}

getRecs();
