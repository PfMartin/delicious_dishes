CREATE DATABASE delicious_dishes;

CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  title VARCHAR(64),
  prepTime INTEGER,
  servings INTEGER,
  category VARCHAR(16),
  source VARCHAR(64),
  link VARCHAR(128),
  ingredients VARCHAR(512),
  prepSteps VARCHAR (512)
);

/*Test Data*/
INSERT INTO recipes
  (title, prepTime, servings, category, source, link, ingredients, prepSteps)
VALUES
  ('test_title', 5, 4, 'test_category', 'test_source', 'test_link', 'test_ingredients', 'test_prepSteps');