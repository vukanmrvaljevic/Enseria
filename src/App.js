import React, { useEffect, useState } from "react"
import "./App.css"
import Movie from "./components/Movie"
import api_key from "./apikey"

// const API_KEY = process.env.MOVIES_APP_API_KEY
// console.log(api_key) //API KEYS and searches

// const FEATURED_API =
//   "https://api.themoviedb.org/3/movie/popular?api_key=9fb74e1fd6602765bd6909ac7967947d&language=en-US&page=1"
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&language=en-US&page=1`
// const IMG_API = "https://image.tmdb.org/t/p/w1280"
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    getMovies(FEATURED_API)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setMovies(data.results)
        })

      setSearchTerm("")
    }
  }

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  )
}

export default App
