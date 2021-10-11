import React, {useState} from "react";
import {Button, Col, Form, Modal, Row} from "react-bootstrap";

export const IOModal = (props) =>{


    const [amount, setAmount] = useState(0)

    const handleChange = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(props.type ==="withdraw"){
            props.withdraw(amount)
        }
        else{
           props.deposit(amount)
        }
        handleClose()
    }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)



    return(
        <>
            {props.type==="withdraw" ? <Button variant={"secondary"} onClick={handleShow}>Withdraw</Button> : <Button variant={"secondary"} onClick={handleShow}>Deposit</Button>}

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter {props.type} amount</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDesc">
                                <Form.FloatingLabel label={"Enter amount"}>
                                    <Form.Control
                                            name={"amount"}
                                            type={"number"}
                                            min ={"0"}
                                            placeholder="Enter amount"
                                            style={{ height: '100px' }}
                                            onChange={handleChange}
                                        />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}
