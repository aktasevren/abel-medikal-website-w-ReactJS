import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HomePage, notHomePage, ProductPage, ProductPageOff } from "../redux/actions/WebActions";
import icon1 from "../media/ventilator-icon.png"
import icon2 from "../media/elektrokoter-icon.png"
import icon3 from "../media/monitor.png"
import icon4 from "../media/electrocardiogram.png"
import icon5 from "../media/surgical-aspirator.png"
import icon6 from "../media/stork.png"
import icon7 from "../media/pulse-oximeter.png"
import icon8 from "../media/veterinarian.png"
import icon9 from "../media/tension.png"
import icon10 from "../media/usb-c-cable_2422543.png"
import icon11 from "../media/plug_7237595.png"
import icon12 from "../media/vaccine_4377697.png"
import icon13 from "../media/laryngoscope.png"
import icon14 from "../media/otoscope.png"
import icon15 from "../media/weight-scale.png"
import icon16 from "../media/disability-insurance.png"
import icon17 from "../media/vision.png"
import icon18 from "../media/ampoule.png"
import icon19 from "../media/medicine.png"
import icon20 from "../media/pharmacy.png"



export default function Products() {
    const dispatch = useDispatch();

    return (
        <Container className="products-div">
            <Row>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon1}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">VENTİLATÖR ve YEDEK PARÇA</NavLink>
                </Col>

                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon2}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">ELEKTROKOTER ve YEDEK PARÇA</NavLink>
                </Col>

                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon4}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">EKG CİHAZLARI ve AKSESUARLARI</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon9}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">PASLANMAZ GRUBU</NavLink>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon5}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">CERRAHİ ve PORTABLE ASPİRATÖRLER</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon6}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">YENİ DOĞAN GRUBU</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon7}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">OKSİJEN FLOWMETRELERİ ve NEGATİF BASINC ÖLÇERLER</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon8}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">VETERİNER GRUBU</NavLink>
                </Col>

            </Row>
            <Row>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon10}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">BİPOLAR MONOPOLAR ve NÖTR PLAK KOTER KABLOLARI</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon3}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">HASTABAŞI MONİTÖR ve YEDEK PARÇA</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon11}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">BİPOLAR KAMA (EUROPEN) SOKET FORCEPS</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon12}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">İPOLAR İĞNE (USA) SOKET FORCEPS</NavLink>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon13}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">LARİNGOSKOP SETLERİ</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon14}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">DUVARA MONTE ve EL TİPİ OTOSKOP/OFTALMOSKOP SETİ</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon15}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">DİJİTAL YETİŞKİN ve BEBEK TERAZİLERİ-BOY ÖLÇERLER</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon16}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">MEDİKAL TAŞIYICILAR</NavLink>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon17}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">OPTİK ve ALETİ GRUBU</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon18}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">MEDİKAL AMPULLER</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon19}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">POZİSYON JEL PEDLERİ</NavLink>
                </Col>
                <Col lg={3}>
                    <img alt="instagram-logo"
                        src={icon20}
                        className="products-icon" />
                    <NavLink className="products-navlink" to="/ventilator">POLİKLİNİK ÜRÜNLERİ</NavLink>
                </Col>
            </Row>
        </Container>
    )
}























































// import React from 'react'
// import { Container, Row, Col } from "react-bootstrap"
// import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { HomePage, notHomePage, ProductPage, ProductPageOff } from "../redux/actions/WebActions";



// export default function Products() {
//     const dispatch = useDispatch();

//     return (
//         <Container className="products-div">
//             <Row>
//                 <Col lg={6}>
//                     <NavLink onClick={() => { dispatch(notHomePage()) }} className="products-navlink" to="/ventilator">VENTİLATÖR ve YEDEK PARÇA AKSESUAR</NavLink>
//                     <NavLink className="products-navlink" to="/about">ELEKTROKOTER ve YEDEK PARÇA AKSESUAR</NavLink>
//                     <NavLink className="products-navlink" to="/about">HASTABAŞI MONİTÖR ve YEDEK PARÇA AKSESUAR</NavLink>
//                     <NavLink className="products-navlink" to="/about">VETERİNER GRUBU</NavLink>
//                     <NavLink className="products-navlink" to="/about">BİPOLAR MONOPOLAR ve NÖTR PLAK KOTER KABLOLARI</NavLink>
//                     <NavLink className="products-navlink" to="/about">PASLANMAZ GRUBU</NavLink>
//                     <NavLink className="products-navlink" to="/about">BİPOLAR KAMA (EUROPEN) SOKET FORCEPS.</NavLink>
//                     <NavLink className="products-navlink" to="/about">POLİKLİNİK ÜRÜNLERİ</NavLink>
//                     <NavLink className="products-navlink" to="/about">TIBBİ CİHAZ SATIŞI SONRASI HİZMETLER</NavLink>
//                     <NavLink className="products-navlink" to="/about">POZİSYON JEL PEDLERİ</NavLink>
//                 </Col>
//                 <Col lg={6}>
//                     <NavLink className="products-navlink" to="/about">EKG CİHAZLARI ve AKSESUARLARI</NavLink>
//                     <NavLink className="products-navlink" to="/about">CERRAHİ ve PORTABLE ASPİRATÖRLER</NavLink>
//                     <NavLink className="products-navlink" to="/about">YENİ DOĞAN GRUBU ve YEDEK PARÇALARI</NavLink>
//                     <NavLink className="products-navlink" to="/about">BİPOLAR İĞNE (USA) SOKET FORCEPS</NavLink>
//                     <NavLink className="products-navlink" to="/about">LARİNGOSKOP SETLERİ</NavLink>
//                     <NavLink className="products-navlink" to="/about">DUVARA MONTE ve EL TİPİ OTOSKOP/OFTALMOSKOP SETİ</NavLink>
//                     <NavLink className="products-navlink" to="/about">DİJİTAL YETİŞKİN ve BEBEK TERAZİLERİ-BOY ÖLÇERLER</NavLink>
//                     <NavLink className="products-navlink" to="/about">MEDİKAL TAŞIYICILAR</NavLink>
//                     <NavLink className="products-navlink" to="/about">OPTİK ve ALETİ GRUBU</NavLink>
//                     <NavLink className="products-navlink" to="/about">MEDİKAL AMPULLER</NavLink>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }
