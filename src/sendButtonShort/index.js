import React from 'react'

import { PrincipalContainer, TextButton } from './styles'

const PrincipalButton = (props) => {
    return (
        <PrincipalContainer><TextButton>{props.children}</TextButton></PrincipalContainer>
    )
}

export default PrincipalButton