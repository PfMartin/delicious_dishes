const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'delicious_dishes'
});

const addRecipe = (title, prepTime, servings, category, source, link, ingredients, prepSteps) => {
  pool.query('INSERT INTO recipes (title, prepTime, servings, category, source, link, ingredients, prepSteps) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', [title, prepTime, servings, category, source, link, ingredients, prepSteps]);
};

const getRecipe = async () => {
  const recipes = await pool.query('SELECT * FROM recipes;');
  // const recipes = await pool.query('SELECT * FROM websites WHERE category = $1', [category]);
  const rows = await recipes.rows;

  return rows;
}


module.exports = {
  addRecipe: addRecipe,
  getRecipe: getRecipe,
};
