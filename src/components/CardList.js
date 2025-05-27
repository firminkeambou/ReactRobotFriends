// react knows how to render arrays
import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
     
    const renderRobots = robots.map (
        user => <Card key = {user.id} 
                        id={user.id} 
                        name={user.name} 
                        email={user.email}
                /> )

//console.log(renderRobots)
 return (
    <div>
      {renderRobots}
    </div>
  )
}

export default CardList