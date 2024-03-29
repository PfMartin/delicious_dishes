--
-- PostgreSQL database dump
--

-- Dumped from database version 11.11 (Raspbian 11.11-0+deb10u1)
-- Dumped by pg_dump version 11.11 (Raspbian 11.11-0+deb10u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: recipes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.recipes (
    id integer NOT NULL,
    title character varying(64),
    preptime integer,
    category character varying(16),
    source character varying(64),
    link character varying(128),
    ingredients character varying(1000),
    prepsteps character varying(2000),
    servings integer,
    t_stamp timestamp without time zone
);


ALTER TABLE public.recipes OWNER TO postgres;

--
-- Name: recipes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.recipes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.recipes_id_seq OWNER TO postgres;

--
-- Name: recipes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.recipes_id_seq OWNED BY public.recipes.id;


--
-- Name: recipes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes ALTER COLUMN id SET DEFAULT nextval('public.recipes_id_seq'::regclass);


--
-- Data for Name: recipes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.recipes (id, title, preptime, category, source, link, ingredients, prepsteps, servings, t_stamp) FROM stdin;
22	Arugula Smoothie	5	drinks	nutribullet.com	https://www.nutribullet.com/recipes/2048/arugula-smoothie/	1cup,Arugula|1,Green apple|1/2,Banana|2tbsp,Lime juice|1/2tbsp,Ginger root|1 1/2cups,Coconut water|1 1/3cup,Ice	Blend all the ingredients until smooth	2	2021-03-27 17:24:29
5	Potato Tortillas	30	basics	Max La Manna	https://www.instagram.com/reel/CF-Ewg7pVAO/?igshid=af9ws7zfanaz	275g,Potatoes| 220g,Flour	Slice potatoes into small pieces|Cook potatoes until they are soft|Mash the potatoes with a fork|Mix the mashed potatoes with flour|Slice the dough into 8 equally-sized pieces|Roll each piece of dough to a thin tortilla (use a lot of additional flour)|Fry each tortilla on in a hot pan on both sides without any oil until it gets dark and solid	2	2021-01-31 13:33:15
14	Turnip Carrot Salad	10	main	Martin	-	1/2,Turnip|2,Carrots|50ml,White balsamic vinegar|3tbs,Olive oil|1pinch,Salt|1pinch,Pepper|1pinch,Mediterranean herbs	Peel the turnip and the carrots|Grate the turnip and the carrots into a huge bowl|Add white balsamic vinegar, olive oil, salt, and pepper|Refine with mediterranean herbs|Mix all ingredients	2	2021-02-27 19:07:28
19	Mango Smoothie	5	drinks	Princess Lea	-	1/2,Banana|1cup,Frozen Mango|100ml,Water|100ml,Plant-based Milk	Mix everything in a blender	2	2021-03-04 20:49:56
10	Burger Patties	20	main	happyhanniii	https://www.instagram.com/tv/CJoW-D7pK3T/?igshid=16ai7yspvmgcs	3tbs,Flax seeds|3tbs,Water|70g,Oatmeal|1tsp,Vinegar|1tsp,Thyme|1tsp,Cumin|4tbs,Olive oil|1 1/2tsp,Salt|1/2,Red onion|250g,Black beans	Soak flax seeds for 10min in water|Puree 2/3 of the beans with oatmeal and all the spices|Dice the onion and add it to the pureed beans and oatmeal|Add the soaked flax seeds|Mix all the ingredients and form 4 patties|Fry the patties in coconut oil	2	2021-01-31 20:10:19
11	Burger Buns	20	main	happyhanniii	https://www.instagram.com/tv/CJoW-D7pK3T/?igshid=16ai7yspvmgcs	5g,Yeast|150g,Water|80g,Plant-based milk|20g,Sugar|485g,Spelt flour|2tsp,Salt|80g,Plant-based butter|,Sesame	Mix the water, milk, sugar, and yeast|Warm it up|Add flour, salt, and plant-based butter|Mix the compound until a uniform dough has been formed|Divide the dough into 4 even pieces and form them to balls|Drizzle the balls with olive oil and sprinkle them with sesame|Bake the buns for 20min at 200°C (top and bottom heat)	2	2021-01-31 20:17:22
20	Karfiol Wings	60	main	Schnabularasa		1,Califlour|250ml,Oat milk|150g,Flour|1tsp,Garlic powder|1tsp,Pepper powder|,Salt|180g,Tomato puree|20g,Chili sauce|3tbs,Oil	Preheat the oven at 220°C|Prepare a tray with baking sheet|Cut the califlour in wings|Mix milk, flour, garlic powder, pepper powder and salt with a whisk|Add the califlour wings to the batter|Spread the califlour wings on the baking tray|Bake for 20 minutes|In the meantime mix tomato puree, chili sauce and oil in a bowl|Take the wings out and add them to the tomato chili mix|Again spread them on the baking tray|Bake for another 20 minutes|In the meantime prepare a cashew mayonnaise|Take the wings out, top them with the mayonnaise and serve them with fresh vegetables	4	2021-03-12 19:06:04
12	Tomato Garlic Butter	15	breakfast	Sandra´s Geheimrezept	-	1,butter (room temperature)|1glove,Garlic|1pinch,Salt|1pinch,pepper|,Sun dried tomatoes	Cut tomatoes in small pieces|Mix all ingredients 	1	2021-02-06 21:00:17
18	Baked Parsnips	40	main	SevenCooks	https://www.sevencooks.com/de/rezept/gebackene-pastinaken-14568#tab-section-zubereitung	4,Large Parsnips|1,Large onion|1,Leek|2,Carrots|5gloves,Garlic|2,Spring onions|150ml,Olive oil|2tbs,Dried basil|3cm,Ginger (minced)|1tbs ,Balsamic vinegar|1/2,Lemon (juice)|1/2tsp,Pepper powder|2tbs,Mustard|1tbs,Nutritional yeast|1tsp,Soy sauce|,Salt|,Pepper|,Black sesame	Halve the onion and cut it into thick half rings|Peel the parsnips and halve them lengthwise|Cut the leek and the carrots in rings|Throw everything into a large bowl|Add garlic unpeeled and uncut|For the marinade mix olive oil, dried basil, minced ginger, balsamic vinegar, lemon juice, pepper powder, mustard, nutritional yeast, soy sauce, salt and pepper|Save half of the mustard for later|Pour the marinade into the bowl with vegetables and mix well|Throw everything onto a baking plate|Lay the parsnips on top of the vegetables with the cutting side looking upwards|Lay the spring onions on top|Sprinkle the vegetables with black sesame|Bake everything for 20 - 25 minutes at 200°C (top and bottom heat)|Take out the baking plate and baste the parsnips with the remaining mustard|Bake for 5 more minutes	2	2021-02-28 13:24:22
6	Pizza Dough	60	main	Princess Lea		250g,Flour|1/2,Yeast Cube|1pinch,Sugar|1pinch,Salt|1tsp,Olive Oil|125ml,Wheat beer	Mix all the ingredients to a huge ball of dough|Give the dough about 30min rest. Don't disturb!|Roll it to a thin Pizza dough|Prick the dough with a fork	2	2021-01-31 13:33:15
21	Mushroom Risotto	20	main	Bianca Zapatka	https://biancazapatka.com/de/cremiges-pilzrisotto/	125g,Risotto rice|1,Onion (diced)|3,Gloves of garlic (minced)|1-2tbs,Olive oil or vegan butter|60ml,White wine|300ml,Vegetable broth|120ml,Soy cream or coconut milk|250g,Mushrooms|1-2tbs,Soy sauce|,Salt|,Pepper|,Vegan parmesan for garnishing|,Fresh parsley for garnishinf	Heat up the oil in a pan or pot an steam the onions|Add the garlic and steam for another minute|Add the rice and fry it while stirring |Deglaze it with white wine and cook it until the the wine is almost vaporized|Add 150ml of the broth and let everything cook while stirring frequently until the broth is almost absorbed|Add the rest of the broth and let it cook until the rice is 'al dente'|At the end add the soy cream and season it with salt and pepper|While the risotto cooks, heat another tablespoon of oil in a separate pan|Add the mushrooms and fry them for about 5 minutes until they are gold-brown|Then sprinkle the mushrooms with soy sauce|Finally combine the mushrooms and the risotto|The risotto can be garnished with vegan parmesan and parsley	2	2021-03-17 19:30:21
23	Franzbrötchen	3	dessert	vollveggi.de	https://www.vollveggie.de/rezepte/feingebaeck/vegane-franzbroetchen/	,		12	2021-04-24 17:46:26
24	Cashew Mayonnaise	10	basics	Schnabularasa		120g,Cashew nuts|120ml,Plant-based milk|60ml,Olive oil|2tbs,Apple vinegar|2tbs,Agave|1tbs,Nutritional yeast|2tsp,Garlic powder (optional)|2tsp,Onion powder (optional)	Let the cashew nuts soak for 5 minutes in hot water|Mix all the ingredients	4	2021-04-24 20:28:03
25	Cherry Chocoalte Guglhupf	60	dessert	Zucker & Jagdwurst	https://www.zuckerjagdwurst.com/de/rezepte/saftiger-veganer-kirsch-schokoladen-gugelhupf	350g,Cherries|340g,Flour|40g,Cocoa powder|175g,White sugar|12g,Baking powder|8g,Vanilla sugar|330ml,Sparkling water|100ml,Plant oil|50g,Dark chocolate drops|,Plant-based butter|50g,Cherries (for decoration)|250g,Dark chocolate (for decoration)	Preheat the oven at 180°C|Mix the flour, cocoa powder, sugar, baking powder and vanilla sugar in a big bowl|Add the sparkling water and the oil and stir it to a smooth batter. Don't stir to much, otherwise the batter won't get fluffy.|Add the dark chocolate drops and the cherries|Take a Guglhupf form with measures of about 25 x 9 cm and grease it with the plant-based butter. If you don't use a silicone form add some flour or cocoa powder|Fill the form with the batter and bake it for 45min at 180°C in the preheated oven. Test with a wooden stick, if the cake is done inside.|Optional: For decoration melt dark chocolate in a water bath and chop the remaining 50g. Then dash the cake with the molten chocolate and decorate it with the chocolate chops and the remaining cherries.	12	2021-05-23 19:32:57
26	Red Beet Spread with horseradish	20	basics	Zentrum der Gesundheit	https://www.zentrum-der-gesundheit.de/rezepte/fruehstueck/aufstriche/rote-bete-aufstrich	250g,Red beet (cooked)|60g,Sunflower seeds|2tbs,Horseradish|3tbs,Apple vinegar|1tbs,Lemon juice (fresh)|2tbs,Cilantro (minced)|,Salt|,Pepper	Mix all the ingredients in a blender|Season the spread with salt and pepper	20	2021-05-23 19:40:50
\.


--
-- Name: recipes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.recipes_id_seq', 26, true);


--
-- Name: recipes recipes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

