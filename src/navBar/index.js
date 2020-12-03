import React from 'react'
import { FaHome, FaCloudUploadAlt, FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

import { NavbarContainer, LogoContainer } from "./styles";

import feelItLogo from "../assets/LogoFeelIt.svg"

const Navbar = () => {
    return (
        <NavbarContainer>
            <IconContext.Provider value={{ color: "#4E5283", size: "40px" }}>
            <LogoContainer>
                <img src = {feelItLogo} alt = "logo feel it" width = "150px"/>
            </LogoContainer>
                <FaHome />
                <FaCloudUploadAlt />
                <FaUserCircle />
            </IconContext.Provider>
           
        </NavbarContainer>
    )
}

export default Navbar