import React from 'react'

export class Search extends React.Component {
      state = {
            search: 'matrix',
            typeOfFilm: 'all',
      }

      handleKey = (event) => {
            if (event.key === 'Enter') {
                  this.props.searchMovie(this.state.search, this.state.typeOfFilm)
            }
      }
      writer = (event) => {
            this.setState({[event.target.name]: event.target.value}, () => {
                  if (event.target.name === 'typeOfFilm') {
                        this.props.searchMovie(this.state.search, this.state.typeOfFilm)
                        console.log('000000000000000')
                  }
            })

      }
      render() {
            return(
                  <div> 
                        <div style={{display: 'flex', gap: '2vw'}}>
                              <label>
                                    <input 
                                          class="with-gap" 
                                          name="typeOfFilm" 
                                          type="radio"
                                          value='all' 
                                          onChange={this.writer} />
                                    <span>All</span>
                              </label>
                              <label>
                                    <input 
                                          class="with-gap" 
                                          name="typeOfFilm" 
                                          type="radio"
                                          value='movie' 
                                          onChange={this.writer} />
                                    <span>Movie</span>
                              </label>
                              <label>
                                    <input 
                                          class="with-gap" 
                                          name="typeOfFilm" 
                                          type="radio"
                                          value='series' 
                                          onChange={this.writer} />
                                    <span>Series</span>
                              </label>
                              <label>
                                    <input 
                                          class="with-gap" 
                                          name="typeOfFilm" 
                                          type="radio"
                                          value='game' 
                                          onChange={this.writer} />
                                    <span>Game</span>
                              </label>
                        </div>
                        <div className="col s12">
                              <div className="input-field col s12">
                                    <input 
                                          id="email" 
                                          type="text" 
                                          // className="validate"
                                          value={this.state.search}
                                          onChange={(e) => {this.setState({search: e.target.value})}}
                                          onKeyDown={this.handleKey} 
                                    />
                                    <button 
                                          onClick={() => 
                                                this.props.searchMovie(this.state.search, this.state.typeOfFilm
                                          )}
                                          className='search-button'
                                    >search</button>
                              </div>
                        </div>
                  </div>
            )
      }
}

// export {Search}