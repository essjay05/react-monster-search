import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchTerm: ''
    }

  }

  // lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(
        () => {
          return { monsters: users}
        },
        () => {
          console.log('monsters retrieved')
        }
      ))
  }

  onSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    this.setState(() => {
      return { searchTerm }
    })
  }

  render() {

    const { monsters, searchTerm } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchTerm)
    })

    return (
      <div className='App'>
        <SearchBox
          className={ 'monsters-search-box' }
          onChangeHandler={ onSearchChange }
          placeholder={ 'Search Monsters' }/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    );
  }
}

export default App;
