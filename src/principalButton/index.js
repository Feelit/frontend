import React from 'react'

import {PrincipalContainer, TextButton } from './styles'

const PrincipalButton = (props) => {
    return(
        <PrincipalContainer><TextButton>{props.children || "Register"}</TextButton></PrincipalContainer>
    )
}

export default PrincipalButton