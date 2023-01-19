import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import "./index.css";
class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Dropdown
          lists={[
            {
              label: "itm1",
              value: 1,
            },
            { label: "itm2", value: 2 },
            { label: "itm3", value: 3 },
          ]}
        />
      </div>
    );
  }
}

let App = document.getElementById("app");

ReactDOM.render(<Main />, App);
