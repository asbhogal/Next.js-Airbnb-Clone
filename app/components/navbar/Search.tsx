'use client';

import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className="search-bar">
        <div className="search-fields">
            <button>
                Anywhere
            </button>
            <span className="field-line"></span>
            <button>
                Any week
            </button>
            <span className="field-line"></span>
            <button>
                <div>
                    Add guests
                </div>
                <div className="search-icon">
                    <BiSearch size={ 12 } />
                </div>
            </button>
        </div>
    </div>
  )
}

export default Search