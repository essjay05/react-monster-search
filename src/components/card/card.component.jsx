import './card.styles.css'

const Card = (props) => {
 
  const { altTag, imgSrc } = props
  const { id, name, email } = props.monster
  return (
    <div className='card-container' key={ id }>
      <img alt={ altTag }  src={ imgSrc }/>
      <h2 key={ id }>{ name }</h2>
      <p>{ email }</p>
    </div>
  )
}

export default Card