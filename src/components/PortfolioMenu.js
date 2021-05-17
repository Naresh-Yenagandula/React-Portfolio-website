import React, { useState } from 'react'
import { Card, Button,Modal } from 'react-bootstrap'
import items from './Data'
import profile from '../images/profile.png'

function PortfolioMenu() {
    const [show,setShow] = useState(false)
    const [Data, setData] = useState(items)
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
            <Modal show={show} onHide={() => setShow(false)} centered size="lg">
                <Modal.Body className="modal_portfolio">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KBjBPQExJLw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Modal.Body>
            </Modal>

            <div className="d-flex justify-content-center" style={{ marginTop: "4rem" }}>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('all')}>All</Button>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('python')}>Python</Button>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('react')}>React</Button>
                <Button className="portfolioMenu" size="sm" onClick={() => filterData('angular')}>Angular</Button>
            </div>

            <div className="card_items">
                {
                    Data.map((item) => {
                        return (
                            <Card key={item.id} className="mt-4">
                                <Card.Img src={profile} />
                                <Card.Body className="card_portfolio">
                                    <p>{item.title}</p>
                                    <Button className="portfolioMenu" size="sm" onClick={()=>setShow(true)}>Youtube</Button>
                                    <Button className="portfolioMenu" size="sm">Github</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}

export default PortfolioMenu
