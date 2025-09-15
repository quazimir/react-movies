import { Movie } from "./Movie"
import '../App.css'
function Movies(props) {
      const {movies = []} = props
      return (
            <div className="movies">
                  {movies.length ? movies.map(movie => (
                        <Movie key={movies.imdbID} {...movie} />
                  )) : <h2>Nothing found</h2>}
            </div>
      )
}

export {Movies}