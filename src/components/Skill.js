import React from 'react'
import { Container, Row, Col, Accordion, Card, ProgressBar } from 'react-bootstrap'
import { Braces,HddNetwork } from 'react-bootstrap-icons'

function Skill() {
    return (
        <section>
            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>Skills</h1>
                    <p>My technical level</p>
                </div>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    <Row>
                                        <Col md={1}>
                                            <span className="icon_skill"><Braces /></span>
                                        </Col>
                                        <Col md={9}>
                                            <span className="heading_skill">Front End Developer</span><br />
                                            <span className="para_skill">More than 4 years</span>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <div className="clearflex">
                                            <span className="float-left">HTML</span>
                                            <span className="float-right">100 %</span><br />
                                            <ProgressBar now={100} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">CSS</span>
                                            <span className="float-right">80 %</span><br />
                                            <ProgressBar now={80} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">JavaScript</span>
                                            <span className="float-right">85 %</span><br />
                                            <ProgressBar now={85} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">React</span>
                                            <span className="float-right">85 %</span><br />
                                            <ProgressBar now={85} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">Angular</span>
                                            <span className="float-right">80 %</span><br />
                                            <ProgressBar now={80} />
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col md={5}>
                    <Accordion>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    <Row>
                                        <Col md={1}>
                                            <span className="icon_skill"><HddNetwork /></span>
                                        </Col>
                                        <Col md={9}>
                                            <span className="heading_skill">Back End Developer</span><br />
                                            <span className="para_skill">More than 3 years</span>
                                        </Col>
                                    </Row>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        <div className="clearflex">
                                            <span className="float-left">Node JS</span>
                                            <span className="float-right">90 %</span><br />
                                            <ProgressBar now={90} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">Express Js</span>
                                            <span className="float-right">80 %</span><br />
                                            <ProgressBar now={80} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">Python</span>
                                            <span className="float-right">95 %</span><br />
                                            <ProgressBar now={95} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">Java</span>
                                            <span className="float-right">75 %</span><br />
                                            <ProgressBar now={75} />
                                        </div>
                                        <div className="clearflex">
                                            <span className="float-left">PHP</span>
                                            <span className="float-right">80 %</span><br />
                                            <ProgressBar now={80} />
                                        </div>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skill
