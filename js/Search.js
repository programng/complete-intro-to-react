import React from 'react'
import ShowCard from './ShowCard'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map(function(show) {
          return (
            <ShowCard key={show.imdbID} show={show} />
          )
        })}
      </div>
    )
  }
})

export default Search
// <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
