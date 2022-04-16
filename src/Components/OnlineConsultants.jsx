import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {Typography} from "@mui/material";
import {AvatarCard} from "./AvatarCard";
export function Consultants(){
    return(
        <Stack mb={19} direction="column">
            <Typography mb={5} fontSize={28} textAlign={"center"} variant="h1" component="h2">
                مشاوران غیر حضوری
            </Typography>
            <Stack justifyContent="center" direction="row" gap={6}>
                <AvatarCard/>
                <AvatarCard/>
                <AvatarCard/>
                <AvatarCard/>
                <AvatarCard/>
            </Stack>
        </Stack>

    )
}