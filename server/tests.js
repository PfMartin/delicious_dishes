const dataBaseFunctions = require('./db.js');
const getRecipes = dataBaseFunctions.getRecipes;

const allRecipes = getRecipes();

console.log(allRecipes);
