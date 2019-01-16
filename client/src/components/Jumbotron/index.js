import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 150, clear: "both", paddingTop: 70, textAlign: "center"}}
      className="jumbotron ui purple segment"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
