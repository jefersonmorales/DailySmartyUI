import React, { Component } from "react";
import Logo from "./logo";

import SeachBar from "./searchBar";

class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log(query);
  }

  render() {
    return (
      <div>
        <Logo size={55} />
        <SeachBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}

export default Results;
