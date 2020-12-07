import React from 'react'
import { FaHome, FaCloudUploadAlt, FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";

import { NavbarContainer, LogoContainer, ButtonsContainer } from "./styles";

import feelItLogo from "../assets/LogoFeelIt.svg"

const Navbar = () => {
    return (
        <NavbarContainer>
            <ButtonsContainer>
                <IconContext.Provider value={{ color: "#4E5283", size: "2em" }}>
                    <LogoContainer>
                        <img src={feelItLogo} alt="logo feel it" width="150em" />
                    </LogoContainer>
                    <FaHome />
                    <FaCloudUploadAlt />
                    <FaUserCircle />
                </IconContext.Provider>
            </ButtonsContainer>

        </NavbarContainer>
    )
}

export default Navbar