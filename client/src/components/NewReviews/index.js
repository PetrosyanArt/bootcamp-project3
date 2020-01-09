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
        <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>Latest Reviews</b></h1>
        <Row>
          <Col>
            <p><b><span style={{ fontSize: 20 }}>Renns</span></b><br />
            <i><span style={{ fontSize: 25 }}>Uggies Gross Beer</span></i><br />
            <hr/>
            This beer was so disgusting. As soon as I opened the bottle I knew I had made a grave mistake. The scent is that of an old stinky running shoe, and the taste is no better. The texture is like if you mixed maple syrup and coarse sand.</p>
          </Col>
          <Col>
            <p><b><span style={{ fontSize: 20 }}>DTRAIN</span></b><br />
            <i><span style={{ fontSize: 25 }}>Bell's Two Hearted</span></i><br />
            <hr/>
            So good! #lovies</p>          
        </Col>
          <Col>
            <p><b><span style={{ fontSize: 20 }}>SilverBULL</span></b><br />
            <i><span style={{ fontSize: 25 }}>Coors Light</span></i><br />
            <hr/>
            The can was super cold. The mountains were blue. It was good.</p>          
        </Col>
        </Row>
      </Container>
    </div>
    )
  }
}

export default NewReviews;