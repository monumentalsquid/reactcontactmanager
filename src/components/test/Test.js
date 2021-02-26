import React, { Component } from 'react'

class Test extends Component {

  state = {
    test: 'test'
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>
      this.setState({
        title: data.title,
        body: data.body
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    )
  }
}

export default Test;