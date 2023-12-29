import {  Container, Row, Col } from "react-bootstrap"


export default function Footer() {
    return (
        <div className="footer-abel">
            <Container>
                {/* <Navbar expand="lg" >

                    <Navbar.Brand href="/">
                        <img alt="logo" className="homenavbar-logo" src={logoAbel} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                        <Nav className="" >
                            <LinkContainer to="/urunlerimiz">
                                <Nav.Link className="homenav-navitem-footer">ÜRÜNLERİMİZ</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/teknik-servis">
                                <Nav.Link className="homenav-navitem-footer">TEKNİK SERVİS</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/e-katalog">
                                <Nav.Link className="homenav-navitem-footer" >
                                    E-KATALOG
                                    <img alt="mail-icon" src="https://icon-library.com/images/download-icon-white/download-icon-white-21.jpg" className="footer-download-icon" />
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link className="homenav-navitem-footer" >İLETİŞİM</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> */}
            </Container>
            <hr></hr>
            <Container>
                <Row>
                    <Col className="text-center" md={12} lg={4}>
                        <div>
                            <img alt="mail-icon" src="https://cdn.iconscout.com/icon/free/png-256/free-map-navigation-1478546-1250832.png?f=webp" className="footer-icon" />

                        </div>
                        <p>
                            AD İç Kapı, Oruçreis Mahallesi , Tekstilkent Caddesi Tekstilkent G2 Blok No:10, D:No:2084<br></br> 34235 Esenler/İstanbul
                        </p>
                    </Col>
                    <Col className="text-center" md={12} lg={4}>
                        <div>
                            <img alt="mail-icon" src="https://cdn-icons-png.flaticon.com/512/126/126523.png" className="footer-icon" />

                        </div>
                        <p>
                            <span >+90 533 522 87 91</span>
                        </p>
                    </Col>
                    <Col className="text-center" md={12} lg={4}>
                        <div>
                            <img alt="mail-icon" src="https://icons.veryicon.com/png/o/miscellaneous/practical-life-icon/mail-255.png" className="footer-icon" />

                        </div>
                        <p>
                            <span >info@abelmedikal.com</span>
                        </p>
                    </Col>
                    <div className="text-center">© Copyright 2023 - Abel Health Care Medikal - All Rights Reserved</div>
                </Row>
                <div className="text-center designedby">
                    Designed by evrenaktas
                </div>
            </Container>
        </div>

    )
}