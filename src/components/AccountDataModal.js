import React, {useState} from "react";
import {Button,  ListGroup, Modal} from "react-bootstrap";

export const AccountDataModal = (props) =>{

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return(
        <>
            <Button variant={"secondary"} onClick={handleShow}>Show Account</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Transaction history</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>ID: {props.account.id}</ListGroup.Item>
                        <ListGroup.Item>Username: {props.account.username}</ListGroup.Item>
                        <ListGroup.Item>Balance: {props.account.balance}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
            </Modal>
        </>
    )
}
