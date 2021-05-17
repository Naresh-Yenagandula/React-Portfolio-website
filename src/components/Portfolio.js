import React from 'react'
import { motion } from 'framer-motion'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import profile from '../images/profile.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import PortfolioMenu from './PortfolioMenu'

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
                <PortfolioMenu  />
            </Container>
        </motion.div>
    )
}

export default Portfolio
