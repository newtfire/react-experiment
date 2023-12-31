import { FaBars } from "react-icons/fa";
import { FcCloseUpMode } from "react-icons/fc";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: darkgreen;
  width:60%;
    //height: 85px;
    display: flex;
    justify-content: space-between;
   /*  padding: 0.2rem calc((100vw - 1000px) / 2); */
    //z-index: 12;
`;

export const NavLink = styled(Link)`
    color: #808080;
    //display: flex;
    //align-items: center;
    text-decoration: none;
  padding-right:3em;
    //padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: lavenderblush;
    }

`;

export const Tulip = FcCloseUpMode


export const Bars = styled(FaBars)`
    //display:none;
    color: #808080;
  display: block;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    //margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    //@media screen and (max-width: 768px) {
    //    display: none;
    }
`;
