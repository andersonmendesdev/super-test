import React from 'react'

const SearchBar = props => {
    return(
        <input 
            className='InputSearch' 
            type='text' 
            style={{background: 'url(img/lupe.svg) no-repeat scroll 10px 10px'}} 
            placeholder='Filter By Name'
        />
    )
}

export default SearchBar