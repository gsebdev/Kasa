import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"

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