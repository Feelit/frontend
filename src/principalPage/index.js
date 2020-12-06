import React from 'react'
import { ContainerCards } from './styles'

const LargeCard = () => {
    return (<div>
        <h1 style={{

            background: "#F3DFA2",
            width: "500px",            
            height: "780px",
            margin: "30px"

        }}>Card</h1>
    </div>)
}

const PrincipalPage = () => {
    return (
        <ContainerCards>
            {[1, 2, 3, 4, 5].map((card) => {
                return (<LargeCard />)
            })}
        </ContainerCards>)
}

export default PrincipalPage