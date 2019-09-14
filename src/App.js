import React ,{Component} from "react";
import "bulma/css/bulma.css";



import "./App.css";
import Menu from "./components/Menu.js";
import Nav from "./components/Nav.js";



class App extends Component {
  render(){
  return (
    <div className="App">
      <Nav />
      <Menu />

    </div>
  );
}
}

export default App;

