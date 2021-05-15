import React from 'react'
import { motion } from 'framer-motion'
import { Container, Carousel, Image,Row,Col, Button } from 'react-bootstrap'
import profile from '../images/profile.png'

function Portfolio() {
    return (
        <motion.div exit={{ opacity: 0 }} id="section">
            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>Portfolio</h1>
                    <p>Most recent work</p>
                </div>
                <Carousel indicators={false} controls={false}>
                        <Carousel.Item interval={1000}>
                            <Row>
                                <Col md={6}>
                                    <Image className="float-right" src={profile} width="300" alt="carosel1" />
                                </Col>
                                <Col md={6}>
                                    <h3 className="heading_card">CMS Website React</h3>
                                    <span className="mt-3">High level experience in web design and<br />development knowledge, producing<br /> quality work</span><br />
                                    <Button className="mt-4">Visit Project</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <Row>
                                <Col md={6}>
                                    <Image className="float-right" src={profile} width="300" alt="carosel1" />
                                </Col>
                                <Col md={6}>
                                    <h3 className="heading_card">CMS Website React</h3>
                                    <span className="mt-3">High level experience in web design and<br />development knowledge, producing<br /> quality work</span><br />
                                    <Button className="mt-4">Visit Project</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <Row>
                                <Col md={6}>
                                    <Image className="float-right" src={profile} width="300" alt="carosel1" />
                                </Col>
                                <Col md={6}>
                                    <h3 className="heading_card">CMS Website React</h3>
                                    <span className="mt-3">High level experience in web design and<br />development knowledge, producing<br /> quality work</span><br />
                                    <Button className="mt-4">Visit Project</Button>
                                </Col>
                            </Row>
                        </Carousel.Item>
                </Carousel>
            </Container>
        </motion.div>
    )
}

export default Portfolio
