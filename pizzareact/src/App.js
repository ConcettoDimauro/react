import React, { Component } from 'react';
import logo from './harriot.png';
import './App.css';
import Pizza from './Pizza/Pizza'



class App extends Component {
  state = {
    pizzas: [
      {
        id:1,
        name: 'pepperoni',
        sliceCount:8
      }, {
        id:2,
        name: 'spicy meatball',
        sliceCount:10
      }, {
        id:3,
        name: 'Harriots Special',
        sliceCount:6
      }
    ],
    showPizzas: false
  }

  pizzaChange = (event, id) => {
    //find the pizza object
    const pizzaIndex = this.state.pizzas.findIndex(i => {
      return i.id === id;
    });
    //copy the object
    const pizza = {
      ...this.state.pizzas[pizzaIndex]
    };
    //update from textbox
    pizza.name = event.target.value;
    const pizzas = [...this.state.pizzas];
    pizzas[pizzaIndex] = pizza;
    this.setState({ pizzas: pizzas });
    
    
    
  }
  deletePizzaHandler = (pizzaIndex) => {
    const pizzas = [...this.state.pizzas];
    pizzas.splice(pizzaIndex, 1);
    this.setState({ pizzas: pizzas });
  }

  togglePizzasHandler = () => {
    const show = this.state.showPizzas;

    this.setState({
      showPizzas: !show
    });
  }
  render() {
    const style = {
      backgroundColor: 'grey',
      font: 'sans serif',
      border: '1px solid blue',
      padding: '5px',
      cursor: 'help'
    };

    let pizzas = null;
    if (this.state.showPizzas) {
      pizzas = (
        <div>
          {this
            .state
            .pizzas
            .map((pizza, index) => {
              return <Pizza
                click={() => this.deletePizzaHandler(index)}
                name={pizza.name}
                sliceCount={pizza.sliceCount}
                key={pizza.id}
                changed={(event) => this.pizzaChange(event, pizza.id)} 
                slicechange={(event) => this.pizzaChange(event, pizza.id)} />

            })}
        </div>
      );

    }
    return (
      <div className="App">
        <h1> YO IM AINSLEY HARROIT LETS MAKE A PIZZA YEA BOI </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button style={style} onClick={this.togglePizzasHandler}> TOGGLE ME</button>
        {pizzas}
        
      
      </div>
    );
  }

}
export default App;



    /*return (
      
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Harriots pizza palace</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      
    );*/
