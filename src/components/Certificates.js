
import { Row, Col, Container } from "react-bootstrap"




export default function Certificate() {
  const certificateUrl = "https://img.freepik.com/free-vector/stylish-certificate-design_1284-15338.jpg?w=1060&t=st=1700681762~exp=1700682362~hmac=cc4e264476492cc049d48700b1e72181b3138cde2f107e30af33e7364e99d36a"


  return (
    <div>
      <div className="prod-header">
        <p className="header-text">
          BELGELERİMİZ
        </p>
      </div>
      <Container>

        <div>
          <div>
            <div >
              <Container>
                <Row>
                  <Col>
                    <figure class="certificate">
                      <img alt="certificate" className="certificate-image" src={certificateUrl} />
                      <img alt="certificate" className="certificate-image" src={certificateUrl} />
                      <img alt="certificate" className="certificate-image" src={certificateUrl} />
                    </figure>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
}