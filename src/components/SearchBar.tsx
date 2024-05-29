import React from 'react'
import { useState } from 'react'

interface SearchBarProp {
    handleSearch: (e: React.FormEvent<HTMLFormElement>, term: string) => void
}

function SearchBar(props: SearchBarProp) {
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
