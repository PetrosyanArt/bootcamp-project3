import React from "react";
import { Container, Row, Col } from 'reactstrap';


class About extends React.Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
            <div style={{ backgroundColor: "#ffeeed", paddingTop: 100, paddingBottom: 100 }}>
                <Container>
                    <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>Discover New Beers</b></h1>
                    <Row style={{ fontSize: "20px" }}>
                        <Col>
                            <p>Read what other people are recommending</p>
                        </Col>
                        <Col>
                            <p>Find hidden gems from people as passionate about beer as you are</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ paddingTop: 100, paddingBottom: 100 }}>
                <Container>
                    <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>Rate and Review</b></h1>
                    <Row style={{ fontSize: "20px" }}>
                        <Col>
                            <p>Be adventurous. Get out there and try new beers to let the world know what you think</p>
                        </Col>
                        <Col>
                            <p>Tell others what you liked, didn't like, etc.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ backgroundColor: "#ffeeed", paddingTop: 100, paddingBottom: 100 }}>
                <Container>
                    <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>Brought to you by:</b></h1>
                    <div style={{ fontSize: 30 }}>
                        <Row style={{ paddingLeft: 30 }}>
                            <Col>Art Petrosyan</Col>
                            <Col>Derek Stewart</Col>
                            <Col>Tom Rennhack</Col>
                            <Col>Angel Martinez</Col>
                        </Row>
                    </div>
                </Container>
            </div>
            </div>
        )
    }
}

export default About;