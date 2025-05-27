
import React, { Component } from 'react'
import "tachyons"
class Hello extends Component {

  render() {
    console.log(this.props)
    return (
    <div className='f4 tc' >
      <h1>Hello</h1>
      <p>{this.props.greeting}</p>
    </div>
    )
  }
}

export default Hello