import React from "react";

export const childrenWithProps = (props) => {
  return React.Children.map(props.children, (c) =>
    React.cloneElement(c, {
      ...props,
      ...c.props,
    })
  );
};
