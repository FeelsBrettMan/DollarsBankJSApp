import React, {useState} from "react";
import {Alert, Button, Col, Form, Modal, Row} from "react-bootstrap";

export const TransferModel = (props) =>{
    const defaultFormData = {
        toAccount: 0,
        amount: 0
    }

    const [formData, updateFormData] = useState(defaultFormData)

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        if(parseInt(formData.toAccount)=== props.account.id){
            setShowSelfTransferError(true)
            setShowAccountNotFoundError(false)
        }
        else{
            if(props.accountIDArray.find((current)=> current === parseInt(formData.toAccount))!==undefined){
                    props.transfer(formData.amount, formData.toAccount)
                    setShowAccountNotFoundError(false)
                    setShowSelfTransferError(false)
                    handleClose()
            }
            else{
                setShowAccountNotFoundError(true)
                setShowSelfTransferError(false)
            }
        }
    }


    const [show, setShow] = useState(false)
    const [showSelfTransferError, setShowSelfTransferError] = useState(false)
    const [showAccountNotFoundError, setShowAccountNotFoundError]= useState(false)
    const handleClose = () =>{
        setShowAccountNotFoundError(false)
        setShowSelfTransferError(false)
        setShow(false)
    }
    const handleShow = () => setShow(true)



    return(
        <>
            <Button variant={"secondary"} onClick={handleShow}>Transfer</Button>

            <Modal show={show} onHide={handleClose} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter transfer information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAccount">
                                <Form.FloatingLabel label={"Enter account number"}>
                                    <Form.Control
                                        name={"toAccount"}
                                        type={"number"}
                                        min ={"0"}
                                        placeholder="Enter account number"
                                        style={{ height: '100px' }}
                                        onChange={handleChange}
                                    />
                                </Form.FloatingLabel>
                            </Form.Group>
                        </Row>
                        {showSelfTransferError ? <Alert variant={"danger"}>Can't transfer to self!</Alert>: null}
                        {showAccountNotFoundError ? <Alert variant={"danger"}>Can't transfer to non-existent account!</Alert>: null}

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAmount">
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
