import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        console.log('Clicked button');
    }

    render() {
    return (
        <div>
            <h3>Event Handler - Class component</h3>
            <button onClick={this.clickHandler}>Click me</button>
        </div>
    )
  }
}

export default ClassClick