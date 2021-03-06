import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Telephone, Envelope, GeoAlt } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'
import axios from 'axios'
import Snackbar from '@material-ui/core/Snackbar'
import Alert from '@material-ui/lab/Alert';

function Contact() {
    const [Data, setData] = useState({
        name: '',
        email: '',
        project: '',
        message: ''
    })
    const [open, setOpen] = useState(false)

    const submitData = (e) => {
        e.preventDefault()
        axios.post('https://codex-portfolio-server.herokuapp.com/api/contact', Data)
            .then((result) => {
                setOpen(true)
            })
            .catch((error) => {
                console.log(error);
            })
        setData({ name: '', email: '', project: '', message: '' })
    }
    return (
        <motion.div exit={{ opacity: 0 }} id="section">
            <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)}>
                <Alert variant="filled" severity="success">Successfully send</Alert>
            </Snackbar>
            <Container>
                <div className="text-center" style={{ marginBottom: "5rem" }}>
                    <h1>Contact Me</h1>
                    <p>Get in touch</p>
                </div>
                <Row className="justify-content-center">
                    <Col md={1}></Col>
                    <Col md={4} sm={12}>
                        <Row>
                            <Col md={1} sm={12} xs={12}>
                                <span className="icon_skill"><Telephone /></span>
                            </Col>
                            <Col md={9} sm={12} className="pl-4">
                                <span className="heading_skill">Whats App</span><br />
                                <span className="para_skill">7028380283</span>
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
                        <Form onSubmit={submitData}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        size="lg"
                                        type='text'
                                        placeholder="Name"
                                        required
                                        value={Data.name}
                                        onChange={e => setData({ ...Data, name: e.target.value })} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        size="lg"
                                        type='email'
                                        placeholder="Email"
                                        required
                                        value={Data.email}
                                        onChange={e => setData({ ...Data, email: e.target.value })} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group>
                                <Form.Control
                                    size="lg"
                                    type="text"
                                    placeholder="Project"
                                    required
                                    value={Data.project}
                                    onChange={e => setData({ ...Data, project: e.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control
                                    size="lg"
                                    as="textarea"
                                    placeholder="Message"
                                    rows={8}
                                    value={Data.message}
                                    onChange={e => setData({ ...Data, message: e.target.value })} />
                            </Form.Group>
                            <Button className="contact" type="submit">Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Contact
