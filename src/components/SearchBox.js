import React from 'react'

const SearchBox = ({searchChange}) => {
  return (
    <div >
        <input 
        className='pa2 mb3 b--green bg-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}
        />
    </div>
  )
}

export default SearchBox