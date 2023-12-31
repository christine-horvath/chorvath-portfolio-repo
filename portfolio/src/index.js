import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar";
import reportWebVitals from "./reportWebVitals";
import Hero from "./Hero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-light-pink">
      <div className="px-2">
        <NavBar />
        <Hero/>
      </div>
    </div>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
