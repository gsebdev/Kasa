import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Layout() {
    return (
        <React.Fragment>
            <Header />
            <main><Outlet /></main>
            <Footer />
        </React.Fragment> 
    ) 
}
export default Layout