import React from 'react'
import User from '../user'
import Termometer from '../termometer'
import NavBar from '../navBar'
import { ContainerUser, ContainerTermometer, Tittle, ContainerFeelings, ContainerCards } from './styles'


const Card = () => {
    return (<div>
        <h1 style={{

            background: "#F3DFA2",
            width: "360px",
            height: "474px",
            margin: "30px"

        }}>Card</h1>
    </div>)
}

const UserDashboard = () => {
    return (
        <>
            <ContainerUser>
                <User />
            </ContainerUser>

            <ContainerTermometer>
                <Termometer />
            </ContainerTermometer>

            <Tittle>You have X photos</Tittle>

            <ContainerFeelings>
                <h2>Positives: X</h2>
                <h2>Negatives: x</h2>
            </ContainerFeelings>

            <ContainerCards>
            {[1, 2, 3, 4, 5].map((card) => {
                return(<Card />)
            })}            
            </ContainerCards>
           
            <div style = {{ height: "150px"}}> </div>
        </>
    )
}

export default UserDashboard