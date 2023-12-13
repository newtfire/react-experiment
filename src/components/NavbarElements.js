import React from "react";
import { Tulip, Bars, Nav, NavLink, NavMenu } from "./Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <Bars/>
                    <Tulip/>
                    <NavLink to="react-experiment/home" >
                        Home
                    </NavLink>
                    <NavLink to="react-experiment/gallery" >
                        Gallery
                    </NavLink>
                    <NavLink to="react-experiment/projects" >
                        Projects
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;