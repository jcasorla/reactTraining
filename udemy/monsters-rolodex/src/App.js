import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>my name is jose</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      //string: "chinguen a su madre todos",
      monsters: [
        //   {
        //     name: "Franky",
        //     id: "asc1",
        //   },
        //   {
        //     name: "Dracula",
        //     id: "arc2",
        //   },
        //   {
        //     name: "Zombie",
        //     id: "avc3",
        //   },
      ],
    };
  }

  //  .then((response) =>
  //     console.log(response))

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      // .then((users) => console.log(users))
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <input type="search" placeholder="search monsters"></input>
        <CardList monsters={this.state.monsters}></CardList>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
   
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "this is react" })}>
            click me
          </button>
        
        </header> */}
      </div>
    );
  }
}

export default App;
