import React from 'react'
import User from '../user'
import SendButton from '../sendButton'
import { UserContainer } from './styles'
import PrincipalButton from '../principalButton'
import { ContainerForm, Form, Label, Input, Textarea, Tittle, Text } from './styles'



const UploadImage = () => {
    return (
        <ContainerForm>
            <UserContainer>
                <User />
            </UserContainer>

            <Form >
                <Tittle>Upload image</Tittle>
                <Label>
                    <Text>Select image</Text>
                    <SendButton>Select image</SendButton>
                </Label>
                <Label>
                    <Text>Name</Text>
                    <Input type="text" width= "100%" />
                </Label>
                <Label>
                    <Text>Description</Text>
                    <Textarea type="text" />
                </Label>

                <PrincipalButton>Upload</PrincipalButton>

            </Form>


            <div style={{ height: "150px" }}> </div>
        </ContainerForm>)
}

export default UploadImage