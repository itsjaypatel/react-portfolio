import React, { useEffect, useState } from "react";
import backToTop from "../images/icons8-collapse-arrow-50.png";
export const GoToTop = () => {

    const top = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"});
    }
    const[isVisible,setVisible]= useState(false);

    useEffect(() => {
        window.addEventListener("scroll",(event)=>{
            if(document.documentElement.scrollTop > 400){
                setVisible(true);
            }else{
                setVisible(false);
            }
        })
    },[])
    return (
        <>
        { isVisible &&  <div onClick={top} style={{ position: "fixed", "right": "20px", "bottom": "20px" }}>
            <img style={{ height: "50px", width: "50px", borderRadius: "100%", backgroundColor: "rgb(0, 132, 255)", padding: "10px" }} src={backToTop}></img></div>}
        </>
    
);
}