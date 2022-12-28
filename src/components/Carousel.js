import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [num,setnum] = useState(0)

    console.log(images)

    const back=()=>{
        if(num>0)
        {setnum(e=>e-1)}
        else{
            setnum(2)
        }
    }

    const front=()=>{
        if(num<2)
        {setnum(e=>e+1)}
        else{
            setnum(0)
        }
    }

    return<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <  ArrowBackIosIcon onClick={()=>back()}/>
        <img style={{width:'40vw',height:'70vh'}} src={images[num].img} alt="hi" />
        <ArrowForwardIosIcon onClick={()=>front()} />
    </div>
}

export default Carousel;