import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';


export default function Product() {


    const productsGroup = ["VENTİLATÖR ve YEDEK PARÇA AKSESUAR ",
        "ELEKTROKOTER ve YEDEK PARÇA AKSESUAR ",
        "HASTABAŞI MONİTÖR ve YEDEK PARÇA AKSESUAR ",
        "EKG CİHAZLARI ve AKSESUARLARI ",
        "CERRAHİ ve PORTABLE ASPİRATÖRLER ",
        "YENİ DOĞAN GRUBU ve YEDEK PARÇALARI ",
        "OKSİJEN FLOWMETRELERİ ve NEGATİF BASINÇ ÖLÇERLER ",
        "VETERİNER GRUBU ",
        "PASLANMAZ GRUBU ",
        "BİPOLAR MONOPOLAR ve NÖTR PLAK KOTER KABLOLARI ",
        "BİPOLAR KAMA (EUROPEN) SOKET FORCEPS",
        "BİPOLAR İĞNE (USA) SOKET FORCEPS ",
        "LARİNGOSKOP SETLERİ ",
        "DUVARA MONTE ve EL TİPİ OTOSKOP/OFTALMOSKOP SETİ ",
        "DİJİTAL YETİŞKİN ve BEBEK TERAZİLERİ-BOY ÖLÇERLER ",
        "MEDİKAL TAŞIYICILAR ",
        "OPTİK ve ALETİ GRUBU ",
        "MEDİKAL AMPULLER ",
        "POZİSYON JEL PEDLERİ ",
        "POLİKLİNİK ÜRÜNLERİ ",
        "TIBBİ CİHAZ SATIŞI SONRASI HİZMETLER "
    ]


    return (
        <div>
            <div className="prod-header mb-3">
                <p className="header-text">
                    ÜRÜNLERİMİZ
                </p>
            </div>
            <Container>
                <div>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">ANASAYFA</Breadcrumb.Item>
                        <Breadcrumb.Item active href="/products">
                            ÜRÜNLERİMİZ
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>

                <Row>
                    {productsGroup.map((group) => (
                        <Col lg={3}>
                            <Card className='prod-card'>
                                <Card.Body>
                                    <Card.Title>{group}</Card.Title>
                                    <Link to={`/products/ventilator`}>
                                        <Button className='prod-btn' variant="dark">Ürün Grubunu İncele</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>



        </div>

    )
}
