import React from "react";
import { Container, Row, Col } from 'reactstrap';

class NewReviews extends React.Component {
  state = {
    newReviews: [],
  }
  
  render() {
    return(
    <div style={{ paddingTop: 50, paddingBottom: 50, backgroundColor: "#ffeeed" }}>
      <Container>
        <h1 style={{ color: "#ff6961", paddingBottom: 20, textAlign: "center" }}><b>Latest Reviews</b></h1>
        <Row>
          <Col>
            <p><b><span style={{ fontSize: 20 }}>HoppyMcGee</span></b><br />
            <i><span style={{ fontSize: 25 }}>Lagunitas IPA</span></i><br />
            <hr/>
            Absolutely love this beer. A staple at any bar I've been too in the last 5 years. This is my go-to IPA for when I don't want to try something new and I just don't know what else to choose. A perfect crutch. 8/10</p>
          </Col>
          <Col>
            <p><b><span style={{ fontSize: 20 }}>DTrain</span></b><br />
            <i><span style={{ fontSize: 25 }}>Bell's Two Hearted Ale</span></i><br />
            <hr/>
            Probably the best beer I've had this side of the Mississippi. Crisp and weighty, not too filling, and very satisfying. Bell's did an amazing job with this one! 9/10</p>          
        </Col>
          <Col>
            <p><b><span style={{ fontSize: 20 }}>SilverBulletBill</span></b><br />
            <i><span style={{ fontSize: 25 }}>Coors Light</span></i><br />
            <hr/>
            Well, it's Coors Light. It was super cold and it quenched my thirst. You can take down 6-8 of them without breaking a sweat. It's the perfect summer beer for when you are just thirsty and not really looking to drink. 10/10</p>          
        </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default NewReviews;