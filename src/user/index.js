import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { ContainerUser, NameUser } from './styles'
import { IconContext } from "react-icons";

const User = () => {
    return (
        <ContainerUser>
            <IconContext.Provider value={{ color: "#AA9FB1", size: "33px" }}>
                <FaUserCircle />
            </IconContext.Provider>

            <NameUser>
                <p>User</p>
            </NameUser>


        </ContainerUser>
    )
}

export default User



