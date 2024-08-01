import React from "react";
import { childrenWithProps } from "../utils";
export default (props) => (
  <div>
    <h1>
      {props.nome} {props.sobrenome}
    </h1>
    <h2>Filho:</h2>
    <ul>{<li>{childrenWithProps(props)}</li>}</ul>
  </div>
);
