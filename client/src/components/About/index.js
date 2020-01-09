import React from "react";
import { Container, Row, Col } from 'reactstrap';


class About extends React.Component {
    render() {
        return (
            <div className="about-section" style={{ backgroundColor: "#ffeeed", paddingTop: 50, paddingBottom: 50, marginTop: 35 }}>
                <Container>
                    <h1 style={{ color: "#ff6961", paddingBottom: 20 }}><b>About</b></h1>
                    <div style={{ textAlign: "center" }}>
                        <Row style={{ paddingLeft: 30 }}>
                            <p>Cap Collector is a community where you and your peers can post real, no-nonsense reviews of the beers you love, hate, and everything inbetween.</p>
                        </Row>
                        <Row style={{ paddingLeft: 30 }}>
                            <h4 style={{ paddingTop: 10 }}>Why should I join?</h4>
                        </Row>
                        <Row style={{ paddingLeft: 30 }}>
                            <ul>
                                <li>I love beer and want to explore new kinds.</li>
                                <li>The knowledge I already have is immense. Must share!</li>
                                <li>People who drink beer are cool and I want to meet them.</li>
                            </ul>
                        </Row>
                        <Row style={{ paddingLeft: 30 }}>
                            <h4 style={{ paddingTop: 10 }}>Cap Collector is brought to you by:</h4>
                        </Row>
                        <Row style={{ paddingLeft: 30 }}>
                            <Col style={{ marginLeft: 10, marginRight: 10, paddingTop: 20, border: "solid 2px #ff6961", verticalAlign: "middle", borderRadius: 100, height: 100, width: 100 }}>Derek Stewart<br/>Developer</Col>
                            <Col style={{ marginLeft: 10, marginRight: 10, paddingTop: 20, border: "solid 2px #ff6961", verticalAlign: "middle", borderRadius: 100, height: 100, width: 100 }}>Art Petrosyan<br/>Developer</Col>                            
                            <Col style={{ marginLeft: 10, marginRight: 10, paddingTop: 20, border: "solid 2px #ff6961", verticalAlign: "middle", borderRadius: 100, height: 100, width: 100 }}>Angel Martinez<br/>Developer</Col>                            
                            <Col style={{ marginLeft: 10, marginRight: 10, paddingTop: 20, border: "solid 2px #ff6961", verticalAlign: "middle", borderRadius: 100, height: 100, width: 100 }}>Tom Rennhack<br/>Developer</Col>
                        </Row>
                    </div>
                </Container>
                
            </div>
        )
    }
}

export default About;