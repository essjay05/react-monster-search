import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [monsters, setMonsters] = useState([])
  const [title, setTitle] = useState('Monsters Rolodex')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  console.log('rendered')

  useEffect(() => {
    console.log('effect')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchTerm)
    })

    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchTerm])

  const onSearchChange = (event) => {
    const searchTermString = event.target.value.toLowerCase()
    setSearchTerm(searchTermString)
  }

  const onTitleChange = (event) => {
    const setTitleString = event.target.value.toLowerCase()
    setTitle(setTitleString)
  }

  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className={ 'monsters-search-box' }
        onChangeHandler={ onSearchChange }
        placeholder={ 'Search Monsters' }/>
      <br/>
      <SearchBox
        className={ 'title-search-box' }
        onChangeHandler={ onTitleChange }
        placeholder={ 'Set title' }/>
      <CardList monsters={ filteredMonsters }/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchTerm: ''
//     }

//   }

//   // lifecycle methods
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users}
//         },
//         () => {
//           console.log('monsters retrieved')
//         }
//       ))
//   }

//   onSearchChange = (event) => {
//     const searchTerm = event.target.value.toLowerCase()
//     this.setState(() => {
//       return { searchTerm }
//     })
//   }

//   render() {

//     const { monsters, searchTerm } = this.state
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchTerm)
//     })

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className={ 'monsters-search-box' }
//           onChangeHandler={ onSearchChange }
//           placeholder={ 'Search Monsters' }/>
//         <CardList monsters={ filteredMonsters }/>
//       </div>
//     );
//   }
// }

export default App;
