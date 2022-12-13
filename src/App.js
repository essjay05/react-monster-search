import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchTerm: ''
    }

    console.log('constructor')
  }

  // lifecycle methods
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users}
        },
        () => {
          console.log('monsters retrieved')
          console.log(this.state)
        }
      ))
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchTerm = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchTerm }
    })
  }

  render() {

    console.log('render')

    const { monsters, searchTerm } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchTerm)
    })

    return (
      <div className='App'>
        <input
          className='search-box' 
          type='search' 
          placeholder='Search monsters' 
          onChange={ onSearchChange }/>
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={ monster.id }>
                <h1>{ monster.name }</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
