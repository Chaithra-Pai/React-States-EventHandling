import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

       this.clickHandler = this.clickHandler.bind(this);   //Binding in class constructor
    }

    clickHandler(){
        this.setState({
            message:'Welcome to my page!'
        })
    }

    // clickHandler = () => {
    //     this.setState({
    //                 message:'Welcome to my page!'
    //     })
    // } //making handler fuction as arrow function

    render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>CLICK</button> Binding in render method */}
        {/* <button onClick={() => this.clickHandler()}>CLICK</button> Using arrow function in render method */}
        <button onClick={this.clickHandler}>CLICK</button> 
      </div>
    )
  }
}

export default EventBind