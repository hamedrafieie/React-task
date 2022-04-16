import Stack from "@mui/material/Stack";
import React from "react";
import PlanCard from "./ProductCard";
import Box from "@mui/material/Box"
export function PlanCards() {
 return (
  <Stack pt={"50px"} height={"850px"} direction={"row"} gap={4} justifyContent={"center"}>
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

 )
}