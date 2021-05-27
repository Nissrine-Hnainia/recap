import './App.css';
import {List} from "./List"
import React, { useState } from 'react'
import Users from './Components/Users';
import AddUser from './Components/AddUser';

// import {Component} from "react"

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
  return (
    <div>
      <Users liste={list}/>
      <AddUser />
    </div>
  )
}

export default App


