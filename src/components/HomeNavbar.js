import { Navbar, Nav, Container } from "react-bootstrap"
import logoAbel from "../media/logo-text.png"

export default function HomeNavbar() {
    return (
        <div>
            <Navbar expand="lg" className="text-center">
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="logo" className="homenavbar-logo" src={logoAbel} />
                    </Navbar.Brand>
                    <Nav className="homenavbar-nav">
                        {/* <Nav.Link>
                            <img alt="tel-icon" src="https://cdn-icons-png.flaticon.com/512/126/126523.png" className="homenavbar-icon" />
                            <span className="homenavbar-text">+90 533 522 87 91</span>
                        </Nav.Link> */}
                        <div className="mailto-div hn-mailicon">
                            <img alt="mail-icon" src="https://icons.veryicon.com/png/o/miscellaneous/practical-life-icon/mail-255.png"
                                className="homenavbar-icon " />
                            <span className="homenavbar-text">
                                <a href="mailto:info@abelmedikal.com" className="mailto ">
                                    info@abelmedikal.com
                                </a>
                            </span>
                        </div>
                        <Nav.Link className="hn-fbicon no-need" target="blank" href="https://m.facebook.com/profile.php?id=100090855873748&refid=13">
                            <img alt="facebook-logo"
                                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                                className="homenavbar-icon no-need" />
                        </Nav.Link>
                        <Nav.Link className="hn-igicon no-need" target="blank" href="https://instagram.com/abelhealthcaremedikal?igshid=OGQ5ZDc2ODk2ZA==">
                            <img alt="instagram-logo"
                                src="https://1000logos.net/wp-content/uploads/2017/02/insta-logo.png"
                                className="homenavbar-icon no-need " />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}









