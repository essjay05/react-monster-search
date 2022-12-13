import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {
        monsters.map((monster) => {
          const { name, id } = monster
          return (
            <Card 
              key={id} 
              monster={ monster }
              altTag={`monster ${name}`}
              imgSrc={`https://robohash.org/${id}?set=set2&size=180x180`}/>
          )
        })
      }
    </div>
  )
}

export default CardList