export default function MovieCard({ movie }) {
  function truncateWords(text, maxLength) {
    if (text.length <= maxLength) return text
    const words = text.split(" ")
    let result = ""

    for (let word of words) {
      if ((result + word).length > maxLength) break
      result += word + " "
    }
    return result.trim() + " ..."
  }
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p className="card--release">{movie.release_date}</p>
        {/* <p className="card--rating">
          <small>Rating: {movie.vote_average}</small>
        </p> */}
        <p className="card--description">
          {truncateWords(movie.overview, 150)}
        </p>
      </div>
    </div>
  )
}
