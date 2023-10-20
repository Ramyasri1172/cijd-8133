import React from "react";
import ReactDOM from "react-dom/client";
import"./Header.css";
const Header = () => {
    return 
        <header >
            <div >
                <img src="D:\ass3 pics\foodlogo\.png"/>
            </div>
            <div>
                <input 
                    className="input"
                    type="text"
                    placeholder="Search anything you want"/>
            <button type="submit">
                <i class="fa fa-search"></i>
            </button>
            </div>
            <div >
                <img src="D:\ass3 pics\usericon.png"></img>
            </div>

        </header>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />); 
