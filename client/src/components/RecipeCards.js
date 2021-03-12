import React from 'react';
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
import CategoryContainer from './CategoryContainer.js';


class RecipeCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: true,
      breakfast: true,
      dessert: true,
      drinks: true,
      basics: true,
    }
  }

  onHideCategory = (e) => {
    e.preventDefault();

    const category = e.currentTarget.getAttribute('name');
    this.setState({
      [category]: !this.state[category]
    })
  }

  render() {
    return (
      <>
        <h2
          class='categoryHeader'
          name='main'
          onClick={this.onHideCategory}
        >Main {this.state.main === true ? <BiCaretUp style={{float: 'right'}}/> : <BiCaretDown style={{float: 'right'}}/>}</h2>

        {
          this.state.main === true ?
          <CategoryContainer
            recipes={this.props.recipes}
            category='main' onRecipeDetail={this.props.onRecipeDetail}
          /> : ''
        }
        <h2
          class='categoryHeader'
          name='breakfast'
          onClick={this.onHideCategory}
        >Breakfast {this.state.breakfast === true ? <BiCaretUp style={{float: 'right'}}/> : <BiCaretDown style={{float: 'right'}}/>}</h2>
        { this.state.breakfast === true ?
          <CategoryContainer
          headline='Breakfast' recipes={this.props.recipes} category='breakfast' onRecipeDetail={this.props.onRecipeDetail}
          /> : ''
        }
        <h2
          class='categoryHeader'
          name='dessert'
          onClick={this.onHideCategory}
        >Dessert {this.state.dessert === true ? <BiCaretUp style={{float: 'right'}}/> : <BiCaretDown style={{float: 'right'}}/>}</h2>
        {
          this.state.dessert === true ?
          <CategoryContainer
          headline='Dessert' recipes={this.props.recipes} category='dessert' onRecipeDetail={this.props.onRecipeDetail}
          /> : ''
        }
        <h2
          class='categoryHeader'
          name='drinks'
          onClick={this.onHideCategory}
        >Drinks {this.state.drinks === true ? <BiCaretUp style={{float: 'right'}}/> : <BiCaretDown style={{float: 'right'}}/>}</h2>
        {
          this.state.drinks === true ?
          <CategoryContainer
            headline='Drinks' recipes={this.props.recipes} category='drinks' onRecipeDetail={this.props.onRecipeDetail}
          /> : ''
        }
        <h2
          class='categoryHeader'
          name='basics'
          onClick={this.onHideCategory}
        >Basics {this.state.basics === true ? <BiCaretUp style={{float: 'right'}}/> : <BiCaretDown style={{float: 'right'}}/>}</h2>
        {
          this.state.basics === true ?
          <CategoryContainer
            headline='Basics'
            recipes={this.props.recipes} category='basics' onRecipeDetail={this.props.onRecipeDetail}
          /> : ''
        }
      </>
    )
  }
}

export default RecipeCards;
