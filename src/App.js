import React, { Component } from "react";
import "./App.less";
import AtfLayout from "./components/AtfLayout/AtfLayout";
import Header from "./components/Shared/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <AtfLayout />
      </div>
    );
  }
}

export default App;
