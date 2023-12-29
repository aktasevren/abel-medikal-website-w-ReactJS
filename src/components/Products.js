import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HomePage, notHomePage, ProductPage, ProductPageOff } from "../redux/actions/WebActions";



export default function Products() {
    const dispatch = useDispatch();

    return (
        <Container className="products-div">
            <Row>
                <Col lg={6}>
                    <NavLink onClick={() => { dispatch(notHomePage()) }} className="products-navlink" to="/ventilator">VENTİLATÖR ve YEDEK PARÇA AKSESUAR</NavLink>
                    <NavLink className="products-navlink" to="/about">ELEKTROKOTER ve YEDEK PARÇA AKSESUAR</NavLink>
                    <NavLink className="products-navlink" to="/about">HASTABAŞI MONİTÖR ve YEDEK PARÇA AKSESUAR</NavLink>
                    <NavLink className="products-navlink" to="/about">VETERİNER GRUBU</NavLink>
                    <NavLink className="products-navlink" to="/about">BİPOLAR MONOPOLAR ve NÖTR PLAK KOTER KABLOLARI</NavLink>
                    <NavLink className="products-navlink" to="/about">PASLANMAZ GRUBU</NavLink>
                    <NavLink className="products-navlink" to="/about">BİPOLAR KAMA (EUROPEN) SOKET FORCEPS.</NavLink>
                    <NavLink className="products-navlink" to="/about">POLİKLİNİK ÜRÜNLERİ</NavLink>
                    <NavLink className="products-navlink" to="/about">TIBBİ CİHAZ SATIŞI SONRASI HİZMETLER</NavLink>
                    <NavLink className="products-navlink" to="/about">POZİSYON JEL PEDLERİ</NavLink>
                </Col>
                <Col lg={6}>
                    <NavLink className="products-navlink" to="/about">EKG CİHAZLARI ve AKSESUARLARI</NavLink>
                    <NavLink className="products-navlink" to="/about">CERRAHİ ve PORTABLE ASPİRATÖRLER</NavLink>
                    <NavLink className="products-navlink" to="/about">YENİ DOĞAN GRUBU ve YEDEK PARÇALARI</NavLink>
                    <NavLink className="products-navlink" to="/about">BİPOLAR İĞNE (USA) SOKET FORCEPS</NavLink>
                    <NavLink className="products-navlink" to="/about">LARİNGOSKOP SETLERİ</NavLink>
                    <NavLink className="products-navlink" to="/about">DUVARA MONTE ve EL TİPİ OTOSKOP/OFTALMOSKOP SETİ</NavLink>
                    <NavLink className="products-navlink" to="/about">DİJİTAL YETİŞKİN ve BEBEK TERAZİLERİ-BOY ÖLÇERLER</NavLink>
                    <NavLink className="products-navlink" to="/about">MEDİKAL TAŞIYICILAR</NavLink>
                    <NavLink className="products-navlink" to="/about">OPTİK ve ALETİ GRUBU</NavLink>
                    <NavLink className="products-navlink" to="/about">MEDİKAL AMPULLER</NavLink>
                </Col>
            </Row>
        </Container>
    )
}
