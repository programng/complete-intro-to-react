import React from 'react'

var MyTitle = React.createClass({
  render: function () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={style}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

export default MyTitle
// {this.props.title} vs this.props.title
// the former is evaluated javascript, the second would oupt the string 'this.props.title'
