import React, { useState } from "react";
import Responsive from "../../components/Responsive";
import * as ApiReceiver from '../../apiReceiver'

const IndexPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [emps, setEmps] = useState([]);
    React.useEffect(() => {
        if (isLoaded) {
            return
        }
        setIsLoaded(true)
        let formData = new FormData();
        formData.append('userName', 'john')
        formData.append('password', 'johnpassword')
        // ApiReceiver.post('/api/myFirstDjango/login', formData)
        ApiReceiver.get('/api/myFirstDjango/').then((response) => {
            console.dir('???')
            console.dir(response)
            setEmps(response.data.data)
            setIsLoaded(false)
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