import { Row, Col, Container } from "react-bootstrap"
import React from "react";


export default function About() {
    return (
        <div>
            <div className="prod-header">
                <p className="header-text">
                    HAKKIMIZDA
                </p>
            </div>
            <Container>
                <Row>
                    <Col lg={6}>
                        <img alt="certificate"
                            className="mt-5 about-img-1 abo-img"
                            src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </Col>
                    <Col lg={6}>
                        <p className="mt-5">
                            <h4 className="mb-3">Vizyonumuz</h4>
                            Abel Health Care Medikal 2022 yılında istanbul'da' kurulmuştur.
                            Şirketimizin kurucuları sağlık sektöründeki iş deneyimlerinin tamamını enerjik, yenilikçi, metamorfoza uğrayan tıp bilimi ve medikal sektörde uyumu yakalamak için
                            sınırsız bilgi erişimi genişletmeye adamış teknik ve mühendis kadrosuyla kaliteli hizmet anlaşıyışını benimsemiştir.Her zaman gaye ve çabamız yurt içi ve yurt dışında
                            doğru pazarlama ve satış politikasını güvenilir ve sağlam adımlarla ilerletebilmek bu şirket çizgimizde devam edebilmektir.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <p className="mt-5">
                            <h4 className="mb-3">Misyonumuz</h4>
                            Abel Health Care Medikal olarak yüksek kalitede cerrahi tıbbi sarf malzeme, tıbbi cihaz satışı ve marka model fark etmeksizin teknik servis hizmeti vermekteyiz.Şirketimiz, mevcut
                            ürünlerimize ek olarak yeni nesil tedavi şekillerini de takip etmekte olup kullanılabilecek yeni ürün gruplarını ülkemizdeki sağlık sisteminin içine adapte edebilmektedir.
                            Profesyonel yatırımlarla, piyasada kalite ve güven esasına dayalı hizmet vermeye her zaman tarafımızca devam edilecektir.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <img alt="certificate"
                            className="mt-5 mb-5 about-img abo-img"
                            src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}