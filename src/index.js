import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const currentTime = date.getHours();

console.log(currentTime);

const colorStyle = {
  color: "black"
};

if (currentTime < 12) {
  greeting = "Good Morning";
  colorStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  colorStyle.color = "green";
} else {
  greeting = "Good Night";
  colorStyle.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 className="heading" style={colorStyle}>
      {greeting}
    </h1>
  </div>,

  document.getElementById("root")
);
