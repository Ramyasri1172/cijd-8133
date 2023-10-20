import React from "react";
import ReactDOM from "react-dom";
var parent = [React.createElement("div",{},React.createElement("h1",{},"Creating element using h1"),React.createElement("h2",{},"Welcome to React using node JS"),React.createElement("h3",{},"HELLLLOOOOOOO"))]
var rootElement = document.getElementById("root")
var rootReact = ReactDOM.createRoot(rootElement);
rootReact.render(parent)
var par = <h1>Helllo World</h1>
var html = document.getElementById("root")
var react = ReactDOM.createRoot(html)
react.render(par)
const Title = () =>{
    return (
        <h1>Welcome to react using JSX</h1>
    )
}
const Comp = function(){
    return(
        <div>
            <Title/>
            <h1>React functional components</h1>
            <h2>HELOOOOO</h2>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Comp/>)