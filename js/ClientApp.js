import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='props are cool' color='rebeccapurple' />
        <MyTitle title='meow are cool' color='mediumaquamarine' />
        <MyTitle title='blah are cool' color='peru' />
      </div>
    )
  }
})

// var MyFirstComponent = React.createClass({
//     render: function() {
//         return (
//             div(null,
//                 React.createElement(MyTitle),
//                 React.createElement(MyTitle),
//                 React.createElement(MyTitle),
//                 React.createElement(MyTitle)
//             )
//         )
//     }
// })

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
