import React, { Component } from 'react'

export class Counter extends Component {

constructor(props) {
  super(props)
  this.state = {
     first :  this.props.value,
  }
}

    Increment = () => {
        this.setState({first : this.state.first + 1})
        console.log(this.state.first);
    }

    delete = this.props.delete
  render() {
    return (
      <div className='container'>
          <h1 className='bg-red'>{this.state.first}</h1>
          <button onClick={this.Increment} className='btn btn-primary'>Increament</button>
          <button className='btn btn-danger btn-sm m-3' onClick={()=>this.delete(this.props.id)}>Delete</button>
      </div>
    )
  }
}

export default Counter
