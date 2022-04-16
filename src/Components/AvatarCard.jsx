import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import {Typography} from "@mui/material";
import React from "react";

export function AvatarCard(){
    return(
        <Stack gap={4} direction={"column"} justifyContent={"center"} alignItems={'center'} >
            <Avatar
                alt="mammad"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 156, height: 156 }}
            />
            <Typography component={"h3"} >
                مهران فراهانی
            </Typography>
            <Typography>
                علوم سیاسی
            </Typography>
            <Typography>
                دانشگاه تهران
            </Typography>
        </Stack>
    )
}