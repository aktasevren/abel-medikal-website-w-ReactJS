
import { Container, Image, Col, Row } from "react-bootstrap"
import vent1 from "../media/ventilator1.JPG"
import flow1 from "../media/flow1.JPG"
import oks1 from "../media/oks1.JPG"
import sol1 from "../media/sol1.JPG"
import test1 from "../media/test1.JPG"
// import aboutUs from "../media/aboutus.png"
import Breadcrumb from 'react-bootstrap/Breadcrumb';





export default function Ventilator() {
    return (
        <div>
            <div className="prod-header mb-3">
                <p className="header-text">
                    VENTİLATOR ve YEDEK PARÇA AKSESUAR
                </p>
            </div>
            <Container>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">ANASAYFA</Breadcrumb.Item>
                        <Breadcrumb.Item href="/products">
                            ÜRÜNLERİMİZ
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active href="#">
                            VENTILATOR
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <Row className="">
                    <Col className="prod-rows" xs={6} lg={3}>
                        <Image className='prod-images' src={flow1} thumbnail />
                        <p className="prod-text">Flow Sensörler</p>
                    </Col>
                    <Col className="prod-rows" xs={6} lg={3}>
                        <Image className='prod-images' src={oks1} thumbnail />
                        <p className="prod-text">Oksijen Sensörler</p>
                    </Col>
                    <Col className="prod-rows" xs={6} lg={3}>
                        <Image className='prod-images' src={test1} thumbnail />
                        <p className="prod-text">Test Balonları</p>
                    </Col>
                    <Col className="prod-rows" xs={6} lg={3}>
                        <Image className='prod-images' src={vent1} thumbnail />
                        <p className="prod-text">Ventilator Cihazları</p>
                    </Col>
                    <Col className="prod-rows" xs={6} lg={3}>
                        <Image className='prod-images' src={sol1} thumbnail />
                        <p className="prod-text">Solunum Devreleri</p>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}