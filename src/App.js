import './App.css';
import {List} from "./List"
import React, { useState } from 'react'
import Users from './Components/Users';
import AddUser from './Components/AddUser';

// import {Component} from "react"   using class component to make it stateful

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state={
//       list: List,
//     }
//   }

//   render() {
//     return (
//       <div>
//         <Users list={List}/>
//         <AddUser />
//       </div>
//     )
//   }
// }

const App = () => {
  const [list, setList] = useState(List)
  const handleAdd = (newUser) => {
    setList([...list, newUser])     //spreading the initial list and adding the new user
  }
  return (
    <div className="App">
      <Users liste={list}/>    {/* passing liste as props from the parent App to the child Users */ }
      <AddUser handleAdd={handleAdd}/>   {/* passing handleAdd function as props from the parent App to the child Users */ }
    </div>
  )
}

export default App


