import React from "react";
import { About,Footer,Header,Work,Skills,Study } from "./containers";
import { Navbar } from "./components";
import "./App.scss"

const App = () => {
  return (
    <div className="app">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;