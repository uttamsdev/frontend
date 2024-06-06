// console.log("Hello")

//using bandler to import 
import { AnotherHello, HelloWorld } from "./another";
import React from "react";
import ReactDOM from 'react-dom/client'
const App = () => {

    return React.createElement(
      "h1",
      { style: { color: "red" } },
      "This is h1 tag new",
      HelloWorld(),
      AnotherHello()
    );
};
const root = ReactDOM.createRoot(document.getElementById("root")); //creating root


root.render(React.createElement(App)); //rendering app



// using babel 
/*

// const HelloWorld = () => {
//     return <div>Hello world</div> 
// }
// const App = () => {
//     return (<React.Fragment><div>This is a manual react app</div> <HelloWorld/></React.Fragment>)
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

*/