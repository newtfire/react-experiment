import React from "react";
import { Tulip, Bars, Nav, NavLink, NavMenu } from "./Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <Bars/>
                    <Tulip/>
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/gallery" >
                        Gallery
                    </NavLink>
                    <NavLink to="/projects" >
                        Projects
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;