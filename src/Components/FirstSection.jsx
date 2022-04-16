import {Box, Button, Stack, Typography} from "@mui/material";
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { styled } from '@mui/system';

const StyledButton = styled(Button)
    `background-color:#EB5B41;
    color:white;
    width: 146px;
    height: 54px;
    border-radius:8px;
    :hover{
      background-color:#EB5B41 ;
    }`


export function FirstSection(){
    return(
        <Box sx={{width:"100%",
            height:"400px"}}>
            <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
                <Typography mb={10} variant={"h3"} fontSize={28} fontWeight={"bold"}>
                    مشاوره غیر حضوری
                </Typography>
                <Typography lineHeight={2} textAlign={"center"} mb={7} width={"1084px;"} variant={"body1"} fontSize={18}>
                    مرکز مشاوره تحصیلی جامع نگر دکتر نکوئی، ارائه کننده خدمات آموزشی و مشاوره تحصیلی به صورت حضوری و غیرحضوری می‌باشد. هر بخش در جهت پیشبرد آموزش دانش‌آموزان، دارای مراحل و شرایط منحصر‌بفرد خود می‌باشند. بخش مشاوره غيرحضوري، قبل از شيوع ويروس كرونا و به جهت آگاهي بيشتر دانش‌آموزان در حوزه آموزشي و در همه جاي ايران زمين، از سال 1397، در مركز مشاوره دكتر نكوئي راه اندازي شده است.
                </Typography>
                <StyledButton >
                    انتخاب طرح
                </StyledButton>
            </Stack>
        </Box>


    )
}