import { Col, Row } from "react-bootstrap";

export default function Lastnews() {
    return (
        <div>
            <h3 className="text-center mt-5">SON HABERLER</h3>
            <Row>

                <div class="ln-container">
                    <div class="ln-square">
                        <img src="https://www.biomedya.com/uploads/haberler/biomedya_robotik-el-ile-dokunma-hissi.png" class="ln-mask" />
                        <div class="ln-h1">Robotik el ile dokunma hissi</div>
                        <p className="ln-p">Beyin Çipi Takılan Felçli Adam Robotik El ile “Dokunma Hissi” Kazanan İlk İnsan Oldu</p>
                        <div><a href="https://www.biomedya.com/robotik-el-ile-dokunma-hissi" target="_" class="ln-button">Read More</a></div>
                    </div>
                    <div class="ln-square">
                        <img src="https://www.biomedya.com/uploads/images/articles/large/bacaktan-alinan-fibula-kemiginden-gogsune-kemik-yapildi-3676-dhaphoto4-5mii_gk0y0wfm0xwf_hcwq.jpg" class="ln-mask" />
                        <div class="ln-h1">Bacağından göğsüne kemik yapıldı</div>
                        <p className="ln-p">Açık kalp ameliyatı sonucu göğüs kafesinin ön duvar kemiğinde enfeksiyon meydana gelen Muzaffer Ökten'in, sol bacağından fibula (baldır) kemiği alınıp göğüs kafesine yerleştirildi.</p>
                        <div><a href="https://www.biomedya.com/bacagindan-gogsune-kemik-yapildi" target="_" class="ln-button">Read More</a></div>
                    </div>
                    <div class="ln-square">
                        <img src="https://www.biomedya.com/uploads/images/articles/large/kisirlik.png" class="ln-mask" />
                        <div class="ln-h1">3D yazıcılarla kısırlığa çözüm</div>
                        <p className="ln-p">Üç boyutlu yazıcılarda üretilen biyo-protez fare yumurtalıklarının yerleştirildiği fareler sağlıklı yavrular dünyaya getirdi.</p>
                        <div><a href="https://www.biomedya.com/3d-yazicilarla-kisirliga-cozum" target="_" class="ln-button">Read More</a></div>
                    </div>
                </div>
            </Row>
        </div>


    )
}