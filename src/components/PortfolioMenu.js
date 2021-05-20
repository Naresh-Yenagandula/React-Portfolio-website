import React, { useState, useEffect } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import items from './Data'
import { Youtube, Github } from 'react-bootstrap-icons'
import Skeleton from '@material-ui/lab/Skeleton'

function PortfolioMenu() {
    const [show, setShow] = useState({ modal: false, data: '' })
    const [Data, setData] = useState(items)

    useEffect(() => {
        setData(items)
    }, [])

    const filterData = (category) => {
        if (category === 'all') {
            setData(items)
        } else {
            const filteredData = items.filter(i => i.category === category)
            setData(filteredData)
        }
    }
    return (
        <>
            <Modal show={show.modal} onHide={() => setShow({ ...show, modal: false })} centered size="lg">
                <Modal.Body className="modal_portfolio">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src={show.data} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="d-flex justify-content-center" style={{ marginTop: "5rem" }}>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('all')}>All</Button>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('python')}>Python</Button>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('react')}>React</Button>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('angular')}>Angular</Button>
            </div>

            <div className="row justify-content-center mt-4 mb-4">
                {
                    Data.map((item) => {
                        return (
                            <Card key={item.id} className="mx-2 mb-3 custom_card">
                                {item.img?
                                <Card.Img src={item.img} width="298px" height="168px" />:
                                <Skeleton variant="rect" width={298} height={168} />}
                                <span className="port_icons text-center">
                                    {item.youtube ?
                                        <Youtube className="youtube" onClick={() => setShow({ modal: true, data: item.youtube })} /> : null
                                    }
                                    {item.github ?
                                        <Github className="github" /> : null
                                    }
                                </span>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PortfolioMenu
