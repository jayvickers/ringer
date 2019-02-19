import React, { Component } from "react";
import "./App.less";
import AtfLayout from "./components/AtfLayout/AtfLayout";
import Header from "./components/Shared/Header/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGamepad, faHeadset, faTrophy } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AtfLayout />
      </div>
    );
  }
}

library.add(faGamepad, faHeadset, faTrophy);
export default App;
