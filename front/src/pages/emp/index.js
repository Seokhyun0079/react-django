import React, { useState } from "react";
import axios from "axios";
import Responsive from "../../components/Responsive";

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
axios.defaults.withCredentials = true
const IndexPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [emps, setEmps] = useState([]);
    const csrftoken = getCookie('csrftoken');
    console.dir(csrftoken)
    React.useEffect(() => {
        if (isLoaded) {
            return
        }
        setIsLoaded(true)
        axios.get('/api/myFirstDjango/').then((response) => {
            setEmps(response.data.data)
            setIsLoaded(false)
        })
        let formData = new FormData();
        formData.append('userName', 'john')
        formData.append('password', 'johnpassword')
        axios.post('/api/myFirstDjango/login', formData
            , {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRFToken': csrftoken,
                    'X-CSRF-TOKEN': csrftoken
                }
            })
    }, []);
    if (isLoaded) {
        return <>now loading...</>
    }
    return (
        < Responsive >
            {
                emps.map((emp) => (
                    <div key={emp.pk.toString()}>
                        {emp.fields.employee_name}
                    </div>
                ))
            }
        </Responsive>
    )
}

export default IndexPage