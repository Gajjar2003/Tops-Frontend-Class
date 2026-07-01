import React, { Component } from 'react'

export default class Userclass extends Component {
  render() {
    return (
      <div>
        <h2>Hello {this.props.user.username} ! (class component)</h2>
      </div>
    )
  }
}
