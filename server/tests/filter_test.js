const recipes = [
  {id: 1, title: 'First'},
  {id: 2, title: 'Seconds'}
]

const first = recipes.filter((element) => {
  return element.id === 1;
})

console.log(first);
