import React from 'react'
import { motion } from 'framer-motion'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import cmsangular from '../images/cmsangular.png'
import cmsreact from '../images/cmsreact.png'
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
                                <Image className="float-left" rounded src={cmsreact} width="300px" height="158px" alt="react cms app image" />
                                <div className="float-right">
                                    <h2 className="heading_card"><b>CMS Website React</b></h2>
                                    <span className="mt-3">Management System with features like<br /> Role based authorization, token based<br /> authentication, Mail system, OTP System, etc</span><br />
                                    <Button href="https://github.com/Naresh-Yenagandula/React-Cms-App" rel="noreferrer" target="_blank" className="mt-4 portfolio_button">Visit Project</Button>
                                </div>
                            </div>
                            <div className="p-4">
                                <Image className="float-left" rounded src={cmsangular} width="300px" height="158px" alt="amgular cms app image" />
                                <div className="float-right">
                                    <h2 className="heading_card"><b>CMS Website Angular</b></h2>
                                    <span className="mt-3">Management System with features like<br /> Role based authorization, token based<br /> authentication with Angular & Express Js etc</span><br />
                                    <Button href="https://github.com/Naresh-Yenagandula/CMS-App" rel="noreferrer" target="_blank" className="mt-4 portfolio_button">Visit Project</Button>
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
