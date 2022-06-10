import './App.css';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Mosh from './Mosh'

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      count : [
        {id : 0 , value : 2},
        {id : 1 , value : 6},
        {id : 2 , value : 6},
        {id : 3 , value : 5},
      ]
    }
  }

    handleDelete = (id) =>{
      console.log("HANDLER" , id)
      const newCount = this.state.count.filter(c => c.id !== id);
      this.setState({count : newCount})
      ;
    }
  render() {
    return (
      <div>
        {this.state.count.map(counter => <Counter key={counter.id}
        value = {counter.value}
        delete = {this.handleDelete}
        id = {counter.id}
        ></Counter>)}
      </div>
    )
  }
}

export default App
