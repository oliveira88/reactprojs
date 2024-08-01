import React, { Component } from "react";

class Filho extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          {this.props.nome} {this.props.sobrenome}
        </h1>
      </div>
    );
  }
}

export default Filho;
