
import { Card, Container, CardGroup } from "react-bootstrap"




export default function Lastnews() {


    return (
        <div>

            <Container>
                <h3 className="text-center mt-5">SON HABERLER</h3>
                <CardGroup>
                    <Card className="lastnews-card">
                        <Card.Img variant="top" className="lastnews-img" src="https://www.biomedya.com/uploads/haberler-2/biomedya_yeni_bir_sensor_bandi_hayati_bir_hormonu_izleyebilir.jpg" />
                        <Card.Body>
                            <Card.Title>Yeni bir sensör bandı, hayati bir hormonu izleyebilir</Card.Title>
                            <Card.Text>
                                Giyilebilir sensörler halihazırda çeşitli önemli sağlık özelliklerini izleyebilmektedir. Ancak özellikle kadınlar için hormonal seviyeleri tespit etme konusunda hala çok yetersizler.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="lastnews-card">
                        <Card.Img variant="top" src="https://www.biomedya.com/uploads/haberler-2/shutterstock_1806981886.jpeg" />
                        <Card.Body>
                            <Card.Title>20 yıl önce dondurulan testis dokusunun hala canlı sperm üretebildiği keşfedildi</Card.Title>
                            <Card.Text>
                                Yeni yapılan bir araştırmada dondurulmuş testis dokusu 20 yıl sonra yeniden yerleştirilebilir halde bulundu. Dahası canlı sperm üretmeye devam edebiliyor.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className="lastnews-card">
                        <Card.Img variant="top" src="https://www.biomedya.com/uploads/images/articles/large/insan-beyni-internet.jpg" />
                        <Card.Body>
                            <Card.Title>İnsan beyni ilk defa internete bağlandı!</Card.Title>
                            <Card.Text>
                                Dünya tarihinde ilk kez insan beyni direkt olarak internete bağlandı. Güney Afrika'da bulunan Wits Üniversitesi araştırmacıları tarih yazdı.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </CardGroup>

            </Container>
        </div>

    )
}