import React from "react";
import { Component } from 'react';
import Score from "./components/Score";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
         <Score />
         </div>
    );
  }
}
export default App;
