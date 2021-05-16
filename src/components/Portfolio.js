import React from 'react'
import { motion } from 'framer-motion'
import { Container, Image, Row, Col, Button, CardDeck, Card } from 'react-bootstrap'
import profile from '../images/profile.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

function Portfolio() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true
    };
    return (
        <motion.div exit={{ opacity: 0 }} id="section">
            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>Portfolio</h1>
                    <p>Most recent work</p>
                </div>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Slider {...settings}>
                            <div className="p-4">
                                <Image className="float-left" rounded src={profile} width="300" alt="carosel1" />
                                <div className="float-right">
                                    <h3 className="heading_card"><b>CMS Website React</b></h3>
                                    <span className="mt-3">High level experience in web design and<br />development knowledge, producing<br /> quality work</span><br />
                                    <Button className="mt-4 portfolio_button">Visit Project</Button>
                                </div>
                            </div>
                            <div className="p-4">
                                <Image className="float-left" rounded src={profile} width="300" alt="carosel1" />
                                <div className="float-right">
                                    <h3 className="heading_card"><b>CMS Website Angular</b></h3>
                                    <span className="mt-3">High level experience in web design and<br />development knowledge, producing<br /> quality work</span><br />
                                    <Button className="mt-4 portfolio_button">Visit Project</Button>
                                </div>
                            </div>
                        </Slider>
                    </Col>
                </Row>
                <div id="section" className="d-flex justify-content-center">
                    <Button variant="secondary" className="mr-2">
                        All
                    </Button>
                    <Button variant="secondary" className="mr-2">
                        Python
                    </Button>
                    <Button variant="secondary" className="mr-2">
                        Javascript
                    </Button>
                    <Button variant="secondary" className="mr-2">
                        React Js
                    </Button>
                    <Button variant="secondary">
                        Angular Js
                    </Button>
                </div>
                <div>
                    <CardDeck className="mt-4">
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <CardDeck className="mt-4">
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </div>
            </Container>
        </motion.div>
    )
}

export default Portfolio
