function Movie (props) {
      const {
            Title: title,
            Year: year,
            imdbID: id,
            Type: type,
            Poster: poster
      } = props
      // const poster = 'N/A'
      return (
            <div  id={id}>
                  <div className="col s12 m7">
                        <div className="card">
                              <div className="card-image">
                                    {
                                          poster === 'N/A' ? 
                                          <img src={`https://placehold.co/400x600/111111/FFF?text=${title}+(not found)`}/>
                                          :
                                          <img src={poster}/>
                                    }
                                    <span className="card-title">{title}</span>
                              </div>
                              <div className="card-content">
                                    <p style={{fontSize: '1vw'}}>{year} <span className="right">{type}</span></p>
                              </div>
                              <div className="card-action"></div>
                        </div>
                  </div>
            </div>
      )
}

export {Movie}