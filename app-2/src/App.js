import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      foods: [
        "Mexican",
        "Italian",
        "American",
        "Thai",
        "Indian"
      ]
    }
  }
  
  render() {
    let foodsOnScreen = this.state.foods.map( (element, index) =>{
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })

      return (
        <div className="App">
        { foodsOnScreen }
        </div>
      );
    }
  }

export default App;
