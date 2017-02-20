import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: 'props are the best', color: 'peru'}),
        MyTitleFactory({title: 'me are the best', color: 'mediumaquamarine'}),
        MyTitleFactory({title: 'you are the best', color: 'darkvioletred'}),
        MyTitleFactory({title: 'he are the best', color: 'rebeccapurple'})
      )
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
