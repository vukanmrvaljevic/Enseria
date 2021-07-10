import React, { useEffect, useState } from "react"
import "../styles/App.css"
import Movie from "./Movie"
import Logo from "../images/film-text.png"

const API_KEY = process.env.REACT_APP_API_KEY

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=en-US&page=1`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

function Hero({ handleLogout }) {
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
    <section className="hero">
      <nav>
        <img className="logo_image" src={Logo} alt="navbar logo" />
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
          <button onClick={handleLogout}>Logout</button>
        </header>
      </nav>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </section>
  )
}
export default Hero
