import React from 'react';
import {Header} from "./Header";
import Banner from "./banner";
import {FirstSection} from "./FirstSection";
import {SecondSection} from "./secondSection";
import {ThirdSection} from "./ThirdSection";
import {FourthSection} from "./FouthSection";
import {Box, Container} from "@mui/material";
import {PlanCards} from "./PlanCards";
import {Consultants} from "./OnlineConsultants";
import Footer from "./Footer";
export  function HomePage() {
    return (
        <Container maxWidth={"lg"} >
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <PlanCards/>
            <Consultants/>

        </Container>
    );
}

export default HomePage;