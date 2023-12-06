import React from "react";
import { Bars, Nav, NavLink, NavMenu } from "./Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <Bars/>
                    <NavLink to="/" >
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