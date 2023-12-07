import React from "react";
import { Tulip, Bars, Nav, NavLink, NavMenu } from "./Navbar";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <Bars/>
                    <Tulip/>
                    <NavLink to="{Home}" >
                        Home
                    </NavLink>
                    <NavLink to="{Gallery}" >
                        Gallery
                    </NavLink>
                    <NavLink to="{Projects}" >
                        Projects
                    </NavLink>

                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;