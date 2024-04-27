import React from "react";
import hamBurgerIcon from '../images/navbar/hamburger.svg'

export const Hamburger = ({onClick}) => {
    return (
        <div className="hamburger-icon" >
            <img src={hamBurgerIcon} alt="" onClick={onClick} />
        </div>
    );
}