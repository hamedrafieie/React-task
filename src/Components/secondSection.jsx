import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import Group704min from "../Group704min.png"

export function SecondSection(){
    return(
        <Box sx={{width:"100%",
            height:"40rem",
            display:'flex',
            flexDirection:'row'
        }}>
                <Stack
                    maxWidth={"524px"}
                    direction={"column"}
                    alignItems={"start"}
                    justifyContent={"center"}>
                    <Typography
                        mb={10}
                        variant={"h3"}
                        fontSize={28}
                        fontWeight={"bold"}>
                        بررسی کامل سبک زندگی دانش آموز
                    </Typography>
                    <Typography
                        lineHeight={2}
                        textAlign={"right"}
                        mb={7}
                        variant={"body1"}
                        fontSize={18}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
                    </Typography>

                </Stack>
            <img style={{
                position: 'relative',
                left: '-10rem',
                bottom: "9rem",
                width:'40rem',
                height:'32rem'
            }}
                 src={Group704min}/>
        </Box>
    )
}