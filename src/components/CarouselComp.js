
import { Carousel } from "react-bootstrap"
import caro1 from "../media/caro1.png"
import caro2 from "../media/caro2.png"
import caro3 from "../media/caro3.png"

export default function CarouselComp() {



    return (

        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={caro1}
                    alt="First slide"
                />
                <div className="centered-caro-text">ÇÖZÜM ORTAĞINIZ OLMAYI HEDEFLİYORUZ</div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={caro2}
                    alt="First slide"
                />
                <div className="centered-caro-text">ABEL HEALTH CARE MEDIKAL</div>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={caro3}
                    alt="First slide"
                />
                <div className="centered-caro-text">7/24 TEKNİK SERVİS HİZMETİ</div>

            </Carousel.Item>
        </Carousel>
    )
}