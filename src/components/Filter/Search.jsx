import React, { useRef } from 'react'

const Search = ({ dataFilters, setDataFilters }) => {
    const valueSearch = useRef();
    const handleSearch = () => {
        setDataFilters({
            ...dataFilters,
            name: valueSearch.current.value
        });
    }
    return (
        <div>
            <input className='filters__input filters__input-search' placeholder={'Buscar por nombre'} type="text" ref={valueSearch} onKeyUp={handleSearch}/>
        </div>
    )
}

export default Search