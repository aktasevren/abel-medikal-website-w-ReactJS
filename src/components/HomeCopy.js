import React from 'react'
import { Outlet } from "react-router-dom";
import HomeNavbar from './HomeNavbar';
import HomeNav from './HomeNav';
import Footer from './Footer';
import LastNews from "./LastNews"



export default function HomeCopy() {
    return (
        <div>
            <HomeNavbar />
            <hr></hr>
            <HomeNav />
            <hr></hr>
            <LastNews />
            <hr></hr>
            <Footer />
        </div>
    )
}
