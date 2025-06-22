import { useState } from "react"
import "./SearchMovie.css"
import MovieCard from "./MovieCard"

export default function SearchMovie() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovie = async (e) => {
    e.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6db10fc875d22b0249fa4e14842662a0&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setMovies(data.results)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <input
          className="form--input"
          type="text"
          name="query"
          placeholder="i.e. Harry Potter"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        ></input>
        <button className="form--button" type="submit">
          Search
        </button>
      </form>{" "}
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id}></MovieCard>
          ))}
      </div>
    </>
  )
}
