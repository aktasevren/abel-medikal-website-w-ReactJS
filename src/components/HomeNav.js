import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


import React from 'react'

export default function HomeNav() {


    return (
        <div>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="justify-content-center"
                    >
                        <NavLink className="homenav-navitem" to="/about"> HAKKIMIZDA</NavLink>
                        <NavLink className="homenav-navitem" to="/certificates">BELGELERİMİZ</NavLink>
                        <NavLink className="homenav-navitem" to="/products" >ÜRÜNLERİMİZ</NavLink>
                        <NavLink className="homenav-navitem" to="/services"> TEKNİK SERVİS </NavLink>
                        <NavLink className="homenav-navitem" target="blank" to="https://docdro.id/wXCkoVC">E-KATALOG</NavLink>
                        <NavLink className="homenav-navitem" to="/contact">İLETİŞİM</NavLink>
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