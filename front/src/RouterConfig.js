import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/emp/index"
import LoginIndexPage from "./pages/user/index"
const RouterConfig = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<IndexPage />} />
                    <Route path="/login" element={<LoginIndexPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouterConfig