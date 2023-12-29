import { NavLink } from "react-router-dom";
import { Navbar, Container, Dropdown, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { HomePage, notHomePage, ProductPage, ProductPageOff } from "../redux/actions/WebActions";
import { useSelector } from "react-redux";

import React, { useEffect } from 'react'

export default function HomeNav() {
    const dispatch = useDispatch();

    const [productsComponent] = useSelector((state) => [
        state.WebAppReducer.productsComponent,
    ]);


    function productsComponentSwitch() {
        if (productsComponent == "On") {
            dispatch(ProductPageOff());
            console.log("kapandi")
        } else {
            dispatch(ProductPage());
            console.log("acildi")

        }
    }

    useEffect(() => {
        console.log(productsComponent)
    }, [productsComponent])


    return (
        <div>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-center"
                    >
                        <NavLink onClick={() => { dispatch(HomePage()) }} className="homenav-navitem" to="/"> ANA SAYFA</NavLink>
                        <NavLink onClick={() => { dispatch(notHomePage()) }} className="homenav-navitem" to="/about"> HAKKIMIZDA</NavLink>
                        <NavLink onClick={() => { dispatch(notHomePage()) }} className="homenav-navitem" to="/certificates">BELGELERİMİZ</NavLink>
                        <NavLink onClick={() => { productsComponentSwitch() }} className="homenav-navitem" to="#" >ÜRÜNLERİMİZ</NavLink>
                        <NavLink onClick={() => { dispatch(notHomePage()) }} className="homenav-navitem" to="/services"> TEKNİK SERVİS </NavLink>
                        <NavLink onClick={() => { dispatch(notHomePage()) }} className="homenav-navitem" target="blank" to="https://docdro.id/wXCkoVC">E-KATALOG</NavLink>
                        <NavLink onClick={() => { dispatch(notHomePage()) }} className="homenav-navitem" to="/contact">İLETİŞİM</NavLink>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}





// <Dropdown >
// <Dropdown.Toggle className="dd-toggle" >
//     ÜRÜNLERİMİZ
// </Dropdown.Toggle>

// <Dropdown.Menu align='end' className="homenav-dropdownmenu">
//     <Row>
//         <Col lg={6}>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">VENTİLATÖR ve YEDEK PARÇA AKSESUAR</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">ELEKTROKOTER ve YEDEK PARÇA AKSESUAR</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">HASTABAŞI MONİTÖR ve YEDEK PARÇA AKSESUAR</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">VETERİNER GRUBU</NavLink>
//             </Dropdown.Item>

//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">BİPOLAR MONOPOLAR ve NÖTR PLAK KOTER KABLOLARI</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">PASLANMAZ GRUBU</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">BİPOLAR KAMA (EUROPEN) SOKET FORCEPS.</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">POLİKLİNİK ÜRÜNLERİ</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> TIBBİ CİHAZ SATIŞI SONRASI HİZMETLER</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about">POZİSYON JEL PEDLERİ</NavLink>
//             </Dropdown.Item>
//         </Col>
//         <Col lg={6}>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> EKG CİHAZLARI ve AKSESUARLARI</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> CERRAHİ ve PORTABLE ASPİRATÖRLE</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> YENİ DOĞAN GRUBU ve YEDEK PARÇALARI</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> BİPOLAR İĞNE (USA) SOKET FORCEPS</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> LARİNGOSKOP SETLERİ</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> DUVARA MONTE ve EL TİPİ OTOSKOP/OFTALMOSKOP SETİ</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> DİJİTAL YETİŞKİN ve BEBEK TERAZİLERİ-BOY ÖLÇERLER</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> MEDİKAL TAŞIYICILAR</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> OPTİK ve ALETİ GRUBU</NavLink>
//             </Dropdown.Item>
//             <Dropdown.Item >
//                 <NavLink className='dd-item' to="/about"> MEDİKAL AMPULLER</NavLink>
//             </Dropdown.Item>
//         </Col>
//     </Row>

// </Dropdown.Menu>
// </Dropdown>