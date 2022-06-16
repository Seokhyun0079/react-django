import React, { useState } from "react";
import axios from "axios";
const IndexPage = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [emps, setEmps] = useState([]);
    React.useEffect(() => {
        if (isLoaded) {
            return
        }
        setIsLoaded(true)
        axios.get('/api/myFirstDjango/').then((response) => {
            console.dir(response.data.data)
            setEmps(response.data.data)
            setIsLoaded(false)
        })
    }, []);
    if (isLoaded) {
        return <>now loading...</>
    }
    return (
        <>
            {(
                !isLoaded && Array.isArray(emps) &&
                < div >
                    {
                        emps.map((emp) => (
                            <div>{emp.fields.employee_name}</div>
                        ))
                    }
                </div>
            )
            }
        </>
    )
}

export default IndexPage