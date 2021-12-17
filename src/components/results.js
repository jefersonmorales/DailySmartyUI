import React, { Component } from "react";
import Logo from "./logo";

import SeachBar from "./searchBar";

class Results extends Component {
  render() {
    return (
      <div>
        <Logo size={55} />
        <SeachBar />
      </div>
    );
  }
}

export default Results;
