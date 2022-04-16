
import HomePage from "./Components/homPage";
import {Header} from "./Components/Header";
import Banner from "./Components/banner";
import React from "react";
import Footer from "./Components/Footer";
import BottomRow from "./Components/ButtomRow";
function App() {
  return (
    <div className="App">
        <Header/>
        <Banner/>
       <HomePage/>
        <Footer/>
        <BottomRow/>
    </div>
  );
}

export default App;
