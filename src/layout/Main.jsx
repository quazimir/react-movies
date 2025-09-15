import '../App.css'
import React from 'react'
import {Movies} from '../components/Movies'
import Preloader from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

export  class Main extends React.Component {
      state = {
            movies: [],
            typeOfFilm: '',
            defaultFilm: 'matrix',
            loading: true,
      }

      searchMovie = (str, typeOfFilm) => {
            if (str !== '') {
                  this.setState({defaultFilm: str})
            }
            this.setState({loading: true})
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str !== '' ? `${str}` : `${this.state.defaultFilm}`}${typeOfFilm !== 'all' ?  `&type=${typeOfFilm}` : ''}`)
                  .then(response => response.json())
                  .then(data => this.setState({movies: data.Search, loading: false}))

      }

      componentDidMount() {
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
                  .then(response => response.json())
                  .then(data => this.setState({movies: data.Search, loading: false}))
      }


      render() {
            const {movies, loading} = this.state
            return (
                  <div>
                        <main className="container content">
                              <Search 
                                    searchMovie={this.searchMovie} 
                                    filtered={this.filtered}
                              ></Search>
                                    <div>
                                          {!loading ? 
                                                (
                                                      <Movies movies={movies}/>
                                                ) : 
                                                (
                                                      <Preloader></Preloader>
                                                )
                                          }
                                    </div>
                        </main>  

                  </div>
            )
      }
}