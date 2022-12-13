import { Component } from 'react'

class CardList extends Component {

  render() {

    console.log(this.props)
    const { monsters } = this.props
    return (
      <div>
        I'm a card-list component
        {
          monsters.map((monster) => {
            return (
              <div key={ monster.id }>
                <h1>{ monster.name }</h1>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CardList