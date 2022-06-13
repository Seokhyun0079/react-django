import React from "react";
import axios from "axios";
const IndexPage = () => {
    React.useEffect(() => {
        axios.get('/api/myFirstDjango/').then((response) => {
            console.dir(response)
        });
    }, []);
    return (<div>test</div>)

}

export default IndexPage