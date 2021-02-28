// const dataBaseFunctions = require('./db.js');
// const getRecipes = dataBaseFunctions.getRecipes;
//
// const getRecs = async() => {
//   const allRecipes = await getRecipes();
//   console.log(allRecipes);
// }

// getRecs();

//
// const ingredients = '4 Large Parsnips|1 Large onion|1 Leek|2 Carrots|5 Gloves of garlic|2 Spring onions|150ml Olive oil|2tbs Dried basil|3cm Ginger (minced)|1tbs Balsamic vinegar|1/2 Lemon (juice)|1/2tsp Peeper powder|2tbs Mustard|1tbs Nutritional yeast|1tsp Soy sauce|Salt|Pepper|Black sesame'
//
// const prepsteps = 'Halve the onion and cut it into thick half rings|Peel the parsnips and halve them lengthwise|Cut the leek and the carrots in rings|Throw everything into a large bowl|Add garlic unpeeled and uncut|For the marinade mix olive oil, dried basil, minced ginger, balsamic|vinegar, lemon juice, pepper powder, mustard, nutritional yeast, soy sauce, salt and pepper|Save half of the mustard for later|Pour the marinade into the bowl with vegetables and mix well|Throw everything onto a baking plate|Lay the parsnips on top of the vegetables with the cutting side looking upwards|Lay the spring onions on top|Sprinkle the vegetables with black sesame|Bake everything for 20 - 25 minutes at 200°C (top and bottom heat)|Take out the baking plate and baste the parsnips with the remaining mustard|Bake for 5 more minutes'
//
// console.log(ingredients.length, prepsteps.length);

//
// const recipes = [{"id":2,"t_stamp":"2021-02-21T17:45:10.000Z","title":"Test Title","preptime":45,"servings":4,"category":"basics","source":"Test","link":"Test Link","ingredients":["150g Flour","200ml Milk"],"prepsteps":["1. Let's do that","2. Finish that"]},{"id":3,"t_stamp":"2021-02-21T17:46:54.000Z","title":"Another Test","preptime":30,"servings":4,"category":"drinks","source":"Test Source","link":"Test Link","ingredients":["100ml Water,1tbs Sugar"],"prepsteps":["Add Water","Add Sugar"]},
// {"id":18,"t_stamp":"2021-02-28T12:05:00.000Z","title":"Baked Parsnips","preptime":40,"servings":2,"category":"main","source":"SevenCooks","link":"https://www.sevencooks.com/de/rezept/gebackene-pastinaken-14568#tab-section-zubereitung","ingredients":["4 Large Parsnips","1 Large onion","1 Leek","2 Carrots","5 Gloves of garlic","2 Spring onions","150ml Olive oil","2tbs Dried basil","3cm Ginger (minced)","1tbs Balsamic vinegar","1/2 Lemon (juice)","1/2tsp Peeper powder","2tbs Mustard","1tbs Nutritional yeast","1tsp Soy sauce"," Salt"," Pepper"," Black sesame"],"prepsteps":["Halve the onion and cut it into thick half rings","Peel the parsnips and halve them lengthwise","Cut the leek and the carrots in rings","Throw everything into a large bowl","Add garlic unpeeled and uncut","For the marinade mix olive oil, dried basil, minced ginger, balsamic vinegar, lemon juice, pepper powder, mustard, nutritional yeast, soy sauce, salt and pepper","Save half of the mustard for later","Pour the marinade into the bowl with vegetables and mix well","Throw everything onto a baking plate","Lay the parsnips on top of the vegetables with the cutting side looking upwards","Lay the spring onions on top","Sprinkle the vegetables with black sesame","Bake everything for 20 - 25 minutes at 200°C (top and bottom heat)","Take out the baking plate and baste the parsnips with the remaining mustard","Bake for 5 more minutes"]}]

const allRecipes = [
  {
    id: 2,
    ingredients: '150g,Milk|200g,Flour',
    prepsteps: 'First this|Then this',
  },
  {
    id: 3,
    ingredients: ',butter|,eggs',
    prepsteps: 'Another step|One more step',
  }
]

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
  // console.log(ingredients, prepsteps);
})

console.log(allRecipes[0].ingredients);
