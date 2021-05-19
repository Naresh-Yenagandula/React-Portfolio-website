import React from 'react'
import profile from '../images/profile.png'
import { Container, Row, Col, Image } from 'react-bootstrap';
import {motion} from 'framer-motion'

function About() {
    return (
        <motion.div exit={{opacity:0}} id="section">
            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>About Me</h1>
                    <p>My Introduction</p>
                </div>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5} className="my-auto">
                        <Image src={profile} width="350" alt="profile" fluid rounded />
                    </Col>
                    <Col md={5}>
                        <p className="shortIntro mt-3">Web developer, with extensive knowledge and<br/> years of experience, working in web technologies<br/> and UI/UX design, delivering quality work</p>
                        <div style={{marginTop:"3rem"}}>
                            <Row className="text-center">
                                <Col md={4}>
                                    <h3><b>04+</b></h3>
                                    <p>Years<br/>
                                    Experience</p>
                                </Col>
                                <Col md={{span:4,offset:2}}>
                                    <h3><b>10+</b></h3>
                                    <p>Projects<br/>
                                    Completed</p>
                                </Col>
                                {/* <Col md={4}>
                                    <h3><b>08+</b></h3>
                                    <p>Years<br/>
                                    Experience</p>
                                </Col> */}
                            </Row>
                        </div>  
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default About
