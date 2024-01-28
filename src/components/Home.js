import React from "react";

import Lastnews from './LastNews';

import Brands from "./Brands"
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {


    return (

        <div>
            <div className="type-writer">
                <Typewriter
                    words={['ABEL HEALTH CARE MEDIKAL', 'Çözüm ortağınız olmayı hedefliyoruz', '7/24 Teknik Servis Hizmeti']}
                    loop={5}
                    cursor
                    cursorStyle='_'
                    typeSpeed={120}
                    deleteSpeed={90}
                    delaySpeed={1000}
                />
            </div>
            <hr></hr>
            <Brands />
            <hr></hr>
            <Lastnews />

        </div>
    )
}
