import Stack from "@mui/material/Stack";
import React from "react";
import PlanCard from "./ProductCard";
import Box from "@mui/material/Box"
import Group74min from "../Group74min.png"
export function PlanCards() {
 return (
  <Box height={"43rem"}>
      <Stack height={"38rem"} direction={"row"} gap={4} justifyContent={"center"}>
          <Box>
              <PlanCard />
          </Box>
          <Box>
              <PlanCard />
          </Box>
          <Box>
              <PlanCard />
          </Box>

      </Stack>
         <img style={{
             position: 'relative',
             bottom: '24rem',
             zIndex: '-1',
             width: '44rem',
             right: '15rem',
         }}
         src={Group74min} alt="" />
  </Box>

 )
}