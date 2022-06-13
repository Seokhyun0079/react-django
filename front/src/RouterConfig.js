import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/emp/index"
const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<IndexPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouterConfig