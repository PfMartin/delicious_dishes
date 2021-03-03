const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'delicious_dishes'
});

const addRecipe = (title, preptime, servings, category, source, link, ingredients, prepsteps) => {

  const timeMs = new Date().getTime();
  const tStamp = Math.round(timeMs / 1000); // Time in seconds

  pool.query('INSERT INTO recipes (t_stamp, title, preptime, servings, category, source, link, ingredients, prepsteps) VALUES(TO_TIMESTAMP($1), $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [tStamp, title, preptime, servings, category, source, link, ingredients, prepsteps]);
};

const getRecipes = async () => {
  const allRecipes = await pool.query('SELECT * FROM recipes;');
  // const recipes = await pool.query('SELECT * FROM websites WHERE category = $1', [category]);
  const rows = await allRecipes.rows;

  return rows;
}

const getRecipe = async (id) => {
  const recipe = await pool.query('SELECT * FROM recipes WHERE id = $1', [id]);

  const rows = await recipe.rows;

  return rows;
}

const updateRecipe = async (id, title, preptime, servings, category, source, link, ingredients, prepsteps) => {
  const updateRecipe = await pool.query("UPDATE recipes SET title = $1, preptime = $2, servings = $3, category = $4, source = $5, link = $6, ingredients = $7, prepsteps = $8 WHERE id = $9", [title, preptime, servings, category, source, link, ingredients, prepsteps, id]);
}

const deleteRecipe = async (id) => {
  const deleteRecipe = await pool.query("DELETE FROM recipes WHERE id = $1", [id]);
}

module.exports = {
  addRecipe: addRecipe,
  getRecipes: getRecipes,
  getRecipe: getRecipe,
  updateRecipe: updateRecipe,
  deleteRecipe: deleteRecipe,
};
