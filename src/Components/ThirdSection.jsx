import {Box, Stack, Typography} from "@mui/material";
import React from "react";
import Group16min from "../Group16min.png"

export function ThirdSection(){
    return(
        <Box sx={{width:"100%",
            direction:"ltr",
            height:"40rem",
        }}>
            <Stack
                maxWidth={"524px"}
                direction={"column"}
                alignItems={"start"}
                justifyContent={"center"}>
                <Typography
                    textAlign={"left"}
                    mb={10}
                    variant={"h3"}
                    fontSize={28}
                    fontWeight={"bold"}>
                    بررسی وضعیت آموزشی
                </Typography>
                <Typography
                    lineHeight={2}
                    textAlign={"left"}
                    mb={7}
                    variant={"body1"}
                    fontSize={18}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
                </Typography>
            </Stack>
            <img style={{
                width: '55rem',
                height:' 49rem',
                position:"relative",
                right: '-38rem',
                bottom:' 36rem',
            }} src={Group16min} alt=""/>
        </Box>
    )
}