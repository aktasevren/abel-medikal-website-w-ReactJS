
import { Card, Container, CardGroup, CardText, CardTitle, CardImg, CardBody } from "react-bootstrap"

export default function Lastnews() {

    return (
        <div>
            <Container>
                <h3 className="text-center m-5">SON HABERLER</h3>

                <CardGroup>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://www.biomedya.com/uploads/haberler/biomedya_robotik-el-ile-dokunma-hissi.png"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Robotik el ile dokunma hissi
                            </CardTitle>
                            <CardText>
                                Beyin Çipi Takılan Felçli Adam Robotik El ile “Dokunma Hissi” Kazanan İlk İnsan Oldu
                            </CardText>
                            <a href="https://www.biomedya.com/robotik-el-ile-dokunma-hissi" target="_" class="ln-button">...devamı</a>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://www.biomedya.com/uploads/images/articles/large/kisirlik.png"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                3D yazıcılarla kısırlığa çözüm
                            </CardTitle>
                            <CardText>
                                Üç boyutlu yazıcılarda üretilen biyo-protez fare yumurtalıklarının yerleştirildiği fareler sağlıklı yavrular dünyaya getirdi.
                            </CardText>
                            <a href="https://www.biomedya.com/3d-yazicilarla-kisirliga-cozum" target="_" class="ln-button">...devamı</a>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg
                            alt="Card image cap"
                            src="https://www.biomedya.com/uploads/images/articles/large/bacaktan-alinan-fibula-kemiginden-gogsune-kemik-yapildi-3676-dhaphoto4-5mii_gk0y0wfm0xwf_hcwq.jpg"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Bacağından göğsüne kemik yapıldı
                            </CardTitle>
                            <CardText>
                                Açık kalp ameliyatı sonucu göğüs kafesinin ön duvar kemiğinde enfeksiyon meydana gelen Muzaffer Ökten'in, sol bacağından fibula (baldır) kemiği alınıp göğüs kafesine yerleştirildi.
                            </CardText>
                            <a href="https://www.biomedya.com/bacagindan-gogsune-kemik-yapildi" target="_" class="ln-button">...devamı</a>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
        </div>

    )
}