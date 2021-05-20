import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container, Card, Row, Col, Modal } from 'react-bootstrap'
import { Terminal, ArrowRight, CodeSlash, HddNetwork, CheckCircle } from 'react-bootstrap-icons'


function Services() {
    const [smShowPython, setPython] = useState(false)
    const [smShowFront, setFront] = useState(false)
    const [smShowBack, setBack] = useState(false)
    return (
        <motion.div exit={{ opacity: 0 }} id="section">
            {/* Python Modal */}
            <Modal centered show={smShowPython} onHide={() => setPython(false)} aria-labelledby="modal_python">
                <Modal.Header closeButton>
                    <Modal.Body>
                        <h3 className="heading_card mb-4">Python Projects</h3>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                    </Modal.Body>
                </Modal.Header>
            </Modal>

            {/* FrontEnd Modal */}
            <Modal centered show={smShowFront} onHide={() => setFront(false)} aria-labelledby="modal_front">
                <Modal.Header closeButton>
                    <Modal.Body>
                        <h3 className="heading_card mb-4">Frontend Development</h3>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                    </Modal.Body>
                </Modal.Header>
            </Modal>

            {/* Back End Modal */}
            <Modal centered show={smShowBack} onHide={() => setBack(false)} aria-labelledby="modal_back">
                <Modal.Header closeButton>
                    <Modal.Body>
                        <h3 className="heading_card mb-4">Backend Development</h3>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                        <p><CheckCircle /> </p>
                    </Modal.Body>
                </Modal.Header>
            </Modal>


            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>Services</h1>
                    <p>What I Offer</p>
                </div>
                <Row className="justify-content-center">
                    <Col md={3}>
                        <Card className="service_card mb-4">
                            <Card.Body>
                                <span className="icon_card"><Terminal /></span>
                                <p className="heading_card mt-4">Python<br /> Projects</p>
                                <span className="view_service" onClick={() => setPython(true)}>View more <ArrowRight /></span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="service_card mb-4">
                            <Card.Body>
                                <span className="icon_card"><CodeSlash /></span>
                                <p className="heading_card mt-4">Frontend<br /> Development</p>
                                <span className="view_service" onClick={() => setFront(true)}>View more <ArrowRight /></span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="service_card mb-4">
                            <Card.Body>
                                <span className="icon_card"><HddNetwork /></span>
                                <p className="heading_card mt-4">Backend<br /> Development</p>
                                <span className="view_service" onClick={() => setBack(true)}>View more <ArrowRight /></span>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Services
