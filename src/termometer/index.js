import React from 'react'

import { Gradient, Level } from './styles'

import indicator from '../assets/indicador.svg'

const Termometer = () => {
    return (
        <>
            <Gradient>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
                <Level></Level>
            </Gradient>

            <figure>
                <img src={indicator} alt="indicator" width="10px" />
            </figure>
        </>
    )
}

export default Termometer