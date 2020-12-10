/**********************
Colors
**********************/
const colors = {
  dark1: '#2E1114',
  accent: '#501B1D',
  medium: '#64485C',
  light1: '#83677B',
  light2: '#ADADAD',

  white: '#fff',
  black: '#000',
  grey: '#333',
}


const style = {
  /**********************
  Helper Styles
  **********************/
  btnDark: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    borderRadius: '2px',
    background: colors.accent,
    color: colors.white,
    padding: '0.5rem',
    textAlign: 'center',
  },

  btnLight: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    padding: '0.5rem',
    border: `1px ${colors.accent} solid`,
    borderRadius: '2px',
    background: colors.white,
    color: colors.accent,
    textAlign: 'center'
  },

  /**********************
  Header style
  **********************/
  header: {
    background: colors.grey,
    padding: '0.5rem',
  },

  navContainer: {
    position: 'fixed',
    left: 0,
    top: '80px',
    width: '60vw',
    height: '330px',

    // display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem',
    background: colors.grey,
    color: colors.white,
  },

  /**********************
  AddWebsite style
  **********************/
  backgroundStyle: {
    background: colors.accent,
    display: 'flex',
    justifyContent: 'center',
  },

  containerStyle: {
    margin: '0.5rem 1rem 2.5rem 1rem',
    width: '300px',
    background: colors.white,
    borderRadius: '0.25rem',
  },

  formStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    textAlign: 'center',
    color: colors.grey,
  },

  labelStyle: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 2rem 0 2rem'
  },

  /**********************
  RecipeList style
  **********************/
  recipeList: {
    display: 'grid',
    minHeight: '100vh',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '.5rem',
    columnGap: '0.5rem',
    margin: '0.5rem'
  },

  listItem: {
    padding: '1rem',
  },

  /**********************
  Footer style
  **********************/
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100vw',
    color: colors.white,
    background: colors.grey,
    textAlign: 'center',
    padding: '0.5rem',
    fontSize: '0.7rem'
  }
}

module.exports = style;
