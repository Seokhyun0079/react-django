import React, { useState } from "react";
import Responsive from "../../components/Responsive";
import * as ApiReceiver from '../../apiReceiver'
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
const AlignTable = styled.table`
border: 1px solid black;
border-collapse: collapse;
max-width : 720px;
border: 1px solid black;
border-collapse: collapse;
`
const StyledTd = styled.td`
border: 1px solid black;
border-collapse: collapse;
`


const IndexPage = () => {
    const { t } = useTranslation()
    const [isLoaded, setIsLoaded] = useState(false);
    const [emps, setEmps] = useState([]);
    React.useEffect(() => {
        if (isLoaded) {
            return
        }
        setIsLoaded(true)
        ApiReceiver.get('/api/myFirstDjango/').then((response) => {
            setEmps(response.data.data)
            console.dir(response.data.data)
            setIsLoaded(false)
        })
    }, []);
    if (isLoaded) {
        return <>now loading...</>
    }
    return (
        < Responsive >
            <Header />
            <AlignTable>
                <tr >
                    <StyledTd >
                        {t('EMP_NAME')}
                    </StyledTd>
                    <StyledTd >
                        {t('PUB_DATE')}
                    </StyledTd>
                </tr>
                {
                    emps.map((emp) => (
                        <tr key={emp.pk.toString()}>
                            <StyledTd >
                                {emp.fields.employee_name}
                            </StyledTd>
                            <StyledTd >
                                {emp.fields.pub_date}
                            </StyledTd>
                        </tr>
                    ))
                }
            </AlignTable>
        </Responsive>
    )
}

export default IndexPage