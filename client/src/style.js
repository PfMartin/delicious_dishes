const dark1 = '#2E1114';
const accent = '#501B1D';
const medium = '#64485C';
const light1 = '#83677B';
const light2 = '#ADADAD';

const white = '#fff';

const style = {
  backgroundStyle: {
    background: dark1,
  },

  categoryBar: {
    display: 'flex',
    padding: '0.5rem',
    background: accent,
    color: white,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  containerStyle: {
    margin: '1rem',
    background: white,
    border: `solid 1px ${accent}`,
    borderRadius: '0.25rem'
  },

  formStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    textAlign: 'center',
  },

  labelStyle: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '0.5rem'
  },

  recipeList: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '1rem',
    columnGap: '1rem',
    margin: '1rem'
  },

  listItem: {
    padding: '1rem',
    border: `1px solid ${accent}`
  },

  footer: {
    color: white,
    background: accent,
    textAlign: 'center',
    padding: '0.5rem'
  }
}

module.exports = style;
