import './App.css';
import { SetStateAction, useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import React from 'react';

interface Results {
  results: SetStateAction<never[]>
}

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  useEffect((): void => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      const fetchData = async (): Promise<void> => {
        const response: Response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}`)
        const resData: Results = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
  }
  }, [searchTerm])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>, term: string): void => {
    e.preventDefault()
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;