import React, { Component } from 'react'
import Item from './TodoItem';

export default  class TodoList  extends Component {
 state = {}
 render() {
  return(
      <>
   <h1> to-do list </h1>
   <Item/>
   </>
    )
   }
 }




// es6 comcepts