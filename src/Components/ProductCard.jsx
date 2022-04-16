import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

export default function PlanCard() {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Card onMouseLeave={() => setExpanded(!expanded)}
            onMouseEnter={() => setExpanded(!expanded)}
    sx={{
            boxSizing:'border-box',
            width: "340px",
            maxHeight: "688px",
            paddingX:"32px",
            paddingTop:"56px",
            paddingBottom:"32px",
            borderRadius:"24px",
            boxShadow:"box-shadow: 0px 0px 16px #395E983D",
            border: "1px solid #EAEAEA",
        }}>
            <CardContent>
                <Typography fontSize={20} textAlign={"center"} variant="h3" color="#395E98">
                    طرح رهنما
                </Typography>
                <Typography mb={4} fontSize={20} textAlign={"center"} variant="h3">
                    4 تماس در ماه
                </Typography>
                <Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                    وبینار گروهی با دکتر نکویی
                </Typography><Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                وبینار با رتبه های برتر کنکور
            </Typography><Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                اشتراک دائم پلتفرم برنامه ریزی هوشمند
            </Typography>
                <Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                    پیش بینی آزمون و هدف گذاری
                </Typography>
                <Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                    تحلیل آزمونه
                </Typography>
            </CardContent>

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                        وبینار گروهی با دکتر نکویی
                    </Typography><Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                    وبینار با رتبه های برتر کنکور
                </Typography><Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                    اشتراک دائم پلتفرم برنامه ریزی هوشمند
                </Typography>
                    <Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                        پیش بینی آزمون و هدف گذاری
                    </Typography>
                    <Typography fontSize={14} mb={1} textAlign={"center"} variant="h3">
                        تحلیل آزمونه
                    </Typography>

                </CardContent>
            </Collapse>
           <CardContent>
               <Typography textAlign={"center"} fontSize={14} color={"#EB5B41"}>
                   ظرفیت باقی مانده 12 نفر
               </Typography>
               <Typography textAlign={"center"} fontSize={14} color={"#1473E6"}>
                   انتخاب مدت دوره
               </Typography>
               <CardActions sx={{display:"flex", flexDirection:"row", justifyContent:"space-between" }} >
                   <IconButton aria-label="add to favorites">
                       <RemoveIcon />
                   </IconButton>

                   <IconButton aria-label="share">
                       <AddIcon/>
                   </IconButton>
               </CardActions>
           </CardContent>
        </Card>
    );
}