import { Component } from 'react'

import './card.styles.css'

class Card extends Component {
 
  render() {
    const { altTag, imgSrc } = this.props
    const { id, name, email } = this.props.monster
    return (
      <div className='card-container' key={ id }>
        <img alt={ altTag }  src={ imgSrc }/>
        <h2 key={ id }>{ name }</h2>
        <p>{ email }</p>
      </div>
    )
  }
}

export default Card