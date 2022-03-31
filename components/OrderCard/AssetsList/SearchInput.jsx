import React, { useState } from 'react'

import searchInputStyles from '../../../styles/SearchInput.module.css'

import SearchIcon from '../../../assets/icons/searchIcon.svg'

export const SearchInput = () => {
  const [search, setSearch] = useState('')

  return (
    <div className={searchInputStyles.search}>
      <SearchIcon />
      <input
        type='text'
        placeholder='Search assets'
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={searchInputStyles.searchInput}
      />
    </div>
  )
}
