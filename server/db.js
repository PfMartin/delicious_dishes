const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'delicious_dishes'
});

const addRecipe = (title, prepTime, servings, category, source, link, ingredients, prepSteps) => {

  const timeMs = new Date().getTime();
  const tStamp = Math.round(timeMs / 1000); // Time in seconds

  pool.query('INSERT INTO recipes (t_stamp, title, prepTime, servings, category, source, link, ingredients, prepSteps) VALUES(TO_TIMESTAMP($1), $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [tStamp, title, prepTime, servings, category, source, link, ingredients, prepSteps]);
};

const getRecipes = async () => {
  const allRecipes = await pool.query('SELECT * FROM recipes;');
  // const recipes = await pool.query('SELECT * FROM websites WHERE category = $1', [category]);
  const rows = await allRecipes.rows;

  return rows;
}


module.exports = {
  addRecipe: addRecipe,
  getRecipes: getRecipes,
};
