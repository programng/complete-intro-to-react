import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <h1>{this.props.params.id}</h1>
    )
  }
})

// const Details = (props) => {
//   return <h1>{props.params.id}</h1>
// }

export default Details



// <pre><code>
//     {JSON.stringify(this.props, null, 4)}
// </code></pre>
// {
//     "params": {
//         "id": "blah"
//     },
//     "isExact": true,
//     "pathname": "/details/blah",
//     "location": {
//         "pathname": "/details/blah",
//         "search": "",
//         "hash": "",
//         "state": null,
//         "query": null
//     },
//     "pattern": "/details/:id"
// }
