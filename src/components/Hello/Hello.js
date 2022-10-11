import React from "react";
import "./Hello.css";

const Hello = () => {
  return (
    <div id="container">
        <div className="hello"><span className="oneBracket">[</span>Hello,</div>
      <div id="flip">
        <div>
          <div>World</div>
        </div>
        <div>
          <div>Everyone</div>
        </div>
        <div>
          <div>Users</div>
        </div>
      </div>
      <div className="bracket">]</div>
    </div>
  );
};

export default Hello;
