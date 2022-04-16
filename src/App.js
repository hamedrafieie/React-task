
import HomePage from "./Components/homPage";
import {Header} from "./Components/Header";
import Banner from "./Components/banner";
import React from "react";
import Footer from "./Components/Footer";
import BottomRow from "./Components/ButtomRow";
import {Container} from "@mui/material";
function App() {
  return (
    <div className="App">
     <Container maxWidth={"false"}>
         <Header/>
         <Banner/>
     </Container>
       <HomePage/>
        <Footer/>
        <BottomRow/>
    </div>
  );
}

export default App;
