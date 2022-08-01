import React, { useState } from "react";
import styled from "styled-components";
import Responsive from "../../components/Responsive";
import * as ApiReceiver from '../../apiReceiver'
import { useNavigate } from "react-router-dom";
const UnderlineInput = styled.input`
margin-top : 12px;
border: none;
border-bottom : 1px solid black;
&:focus {
    outline: none;
}
`

const Container = styled.div`
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
`

const loginIndexPage = () => {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const login = (e, id, password) => {
        let formData = new FormData();
        formData.append('userName', id)
        formData.append('password', password)
        ApiReceiver.post('/api/myFirstDjango/login', formData).then((res) => {
            console.dir('login res')
            console.dir(res.data)
            navigate("/")
        })

    };
    const onChange = (value, setter) => {
        console.dir(value)
        if (value && value !== '')
            setter(value)
    }
    return (
        < Responsive >
            <Container
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        login(e, id, password)
                    }
                }}
            >

                <UnderlineInput
                    value={id}
                    placeholder="id"
                    onChange={(e) => onChange(e.target.value, setId)}
                />
                <UnderlineInput
                    value={password}
                    placeholder="password"
                    type="password"
                    onChange={(e) => onChange(e.target.value, setPassword)}
                />
                <button onClick={login}>login</button>
            </Container>
        </Responsive>
    )
}

export default loginIndexPage