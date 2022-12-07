import React from 'react'
import './styles.css'
import SearchIcon from '@mui/icons-material/Search';

function Search({search, setSearch}) {
  return (
    <div className='search-box'>
        <SearchIcon className='search-icon'/>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search'/>
    </div>
  )
}

export default Search