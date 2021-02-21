// const ingredientsList = [
//   { amount: '150g', ingredient: 'Flour' },
//   { amount: '200ml', ingredient: 'Milk' }
// ]
//
// const listOfIngredients = ingredientsList.map((e) => {
//   return (`${e.amount} ${e.ingredient}`)
// })
//
// console.log(listOfIngredients);
//
// const ingredients = listOfIngredients.join('|');
//
// console.log(ingredients);

const stepsList = [
  { step: 'First step' },
  { step: 'Second step' },
]

const listOfSteps = stepsList.map((e) => {
  return e.step
})

const prepSteps = listOfSteps.join('|');

console.log(prepSteps);

const steps = prepSteps.split('|');

console.log(steps);
