import React, {useState} from "react";
import {Button, Col, Form, ListGroup, Modal, Row} from "react-bootstrap";

export const TransactionsModal = (props) =>{

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return(
        <>
            <Button variant={"secondary"} onClick={handleShow}>Show history</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction history</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {props.account.history.slice(0).reverse().map((current)=> {return <ListGroup.Item>{current}</ListGroup.Item> })}
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}
