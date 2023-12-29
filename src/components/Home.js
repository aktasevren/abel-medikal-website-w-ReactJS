import React from "react";
import { Outlet } from "react-router-dom";
import HomeNavbar from './HomeNavbar';
import HomeNav from './HomeNav';
import Footer from './Footer';
import { useSelector } from "react-redux";
import Lastnews from './LastNews';
import CarouselComp from './CarouselComp';
import Products from "./Products";


export default function Home() {
    const [currentComponent, productsComponent] = useSelector((state) => [
        state.WebAppReducer.currentComponent,
        state.WebAppReducer.productsComponent
    ]);


    return (
        <div>
            <HomeNavbar />
            <hr></hr>
            <HomeNav />
            <hr></hr>
            {productsComponent === "On" ? <div>
                <Products />
            </div> : <div></div>}
            <main>
                <Outlet />
            </main>

            {currentComponent === "HomePage" ?
                <div>

                    <CarouselComp />
                    <hr></hr>
                    <Lastnews />
                    <hr></hr>
                </div> :
                <div>

                </div>}

            <Footer />
        </div>
    )
}
