import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Search Friends'
                onChange={searchChange}
            />
            {/* on Change is a Pre-built function */}
        </div>
    );
}

export default SearchBox;