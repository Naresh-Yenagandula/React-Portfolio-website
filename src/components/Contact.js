import React from 'react'
import { Container, Row, Col, Form,Button } from 'react-bootstrap';
import { Telephone, Envelope, GeoAlt } from 'react-bootstrap-icons'
import {motion} from 'framer-motion'

function Contact() {
    return (
        <motion.div exit={{opacity:0}} id="section">
            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>Contact Me</h1>
                    <p>Get in touch</p>
                </div>
                <Row>
                    <Col md={1}></Col>
                    <Col md={4}>
                        <Row>
                            <Col md={1}>
                                <span className="icon_skill"><Telephone /></span>
                            </Col>
                            <Col md={9} className="pl-4">
                                <span className="heading_skill">Call Me</span><br />
                                <span className="para_skill">123-456-789</span>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={1}>
                                <span className="icon_skill"><Envelope /></span>
                            </Col>
                            <Col md={9} className="pl-4">
                                <span className="heading_skill">Email</span><br />
                                <span className="para_skill">codexlearn@gmail.com</span>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={1}>
                                <span className="icon_skill"><GeoAlt /></span>
                            </Col>
                            <Col md={9} className="pl-4">
                                <span className="heading_skill">Location</span><br />
                                <span className="para_skill">Mumbai, India</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control size="lg" type='text' placeholder="Name" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control size="lg" type='email' placeholder="Email" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control size="lg" type="text" placeholder="Project" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control size="lg" as="textarea" placeholder="Message" rows={8} />
                            </Form.Group>
                            <Button className="contact">Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Contact
