import { Row, Card, Col, Container } from "react-bootstrap"

import React from "react";




export default function Contact() {


    return (
        <div>
            <div className="prod-header">
                <p className="header-text">
                    BİZE ULAŞIN - İLETİŞİM
                </p>
            </div>
            <Container>

                <div>
                    <div>
                        <Container>
                            <div>
                                <Row className='abel-contact-row'>
                                    <Col xs={12} lg={6}>
                                        <Card className='abel-iletisim-card' >
                                            <Card.Body>
                                                <Card.Title>Emre ÖZBAŞ</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Satış Sorumlusu</Card.Subtitle>
                                                <Card.Text>
                                                    +90 533 522 87 91
                                                </Card.Text>
                                                <Card.Text>
                                                    emreozbas@abelmedikal.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} lg={6}>
                                        <Card className='abel-iletisim-card' >
                                            <Card.Body>
                                                <Card.Title>Fikret AKMAN</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">Teknik Servis Sorumlusu</Card.Subtitle>
                                                <Card.Text>
                                                    +90 554 848 35 16
                                                </Card.Text>
                                                <Card.Text>
                                                    fikretakman@abelmedikal.com
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                                <Row className='abel-contact-row'>
                                    <Col xs={12} >
                                        <Card className='abel-iletisim-card'>
                                            <Card.Body>
                                                <Card.Title>Abel Health Care Medikal Ticaret Limited Şirketi</Card.Title>
                                                <Card.Text>
                                                    <p>
                                                        AD İç Kapı, Oruçreis Mahallesi , Tekstilkent Caddesi Tekstilkent G2 Blok No:10, D:No:2084<br></br> 34235 Esenler/İstanbul
                                                    </p>                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                                <Row className="abel-contact-row mt-5">
                                    <Col lg={6} >
                                        <h1>Bize Ulaşın</h1>
                                        <form id="contact_form" name="contact_form" method="post">
                                            <div class="mb-5 row">
                                                <div class="col">
                                                    <label>Adınız</label>
                                                    <input type="text" required maxlength="50" class="form-control" id="first_name" name="first_name" />
                                                </div>
                                            </div>
                                            <div class="mb-5 row">
                                                <div class="col">
                                                    <label for="email_addr">Mail Adresiniz</label>
                                                    <input type="email" required maxlength="50" class="form-control" id="email_addr" name="email"
                                                        placeholder="ornek@email.com" />
                                                </div>
                                                <div class="col">
                                                    <label for="phone_input">Telefon Numaranız</label>
                                                    <input type="tel" required maxlength="50" class="form-control" id="phone_input" name="Phone"
                                                        placeholder="Telefon Numaranız" />
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <label for="message">Bize Yazın</label>
                                                <textarea class="form-control" id="message" name="message" rows="5"></textarea>
                                            </div>
                                            <button type="submit" class="btn btn-primary px-4 btn-lg">GÖNDER</button>
                                        </form>
                                    </Col>
                                    <Col lg={6} >
                                        <iframe className='googlemap' title="googlemap"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1982264771536!2d28.865462276703887!3d41.06465947134265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab16af0cd37b7%3A0xa2f96de462279997!2sAbel%20Health%20Care%20Medikal!5e0!3m2!1str!2str!4v1700594915330!5m2!1str!2str"
                                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Col>
                                </Row>
                                <a href="https://api.whatsapp.com/send?phone=5335228791&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank" rel="noreferrer">
                                    <i class="fa fa-whatsapp my-float"></i>
                                </a>
                            </div>
                        </Container>
                    </div>
                </div>
            </Container>
        </div>

    )
}