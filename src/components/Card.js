
//https://robohash.org/testt    === getting a random image
import React from 'react'
import "tachyons"  //deal with CSS dib = display inline block;  br3= border Radius, grow = zoom

const Card = ({id,name,email}) => {
    const image = `https://robohash.org/${id}?200x200`
   
  return (
    <div className='tc bg-light-green dib br4 pa3 ma2 bw2 shadow-5 grow'>
    <img  src={image} alt='robots'/>
    <div>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
    </div>
  )
}

export default Card