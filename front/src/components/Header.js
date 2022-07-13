import React, { useState } from "react";
import * as ApiReceiver from '.././apiReceiver'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    const logout = (e, id, password) => {
        let formData = new FormData();
        formData.append('userName', id)
        formData.append('password', password)
        ApiReceiver.post('/api/myFirstDjango/logout', formData).then((res) => {
            console.dir('login res')
            console.dir(res.data)
            navigate("/login")
        })
    };

    return <button onClick={logout}>logout</button>
}
export default Header