import React from "react";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
export const SignIn = (props) => {


    const initFormData = Object.freeze({
        username: "",
        password: "",
    })
    const [formData, updateFormData] = React.useState(initFormData)
    const [showError, setShowError] = React.useState(false)

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value.trim()})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let account
        props.accountArray.forEach((current)=>{if(formData.username===current.username && formData.password ===current.password) account= current})
        if(account){
            setShowError(false)
            props.setAccount(account)
        }
        else {
            setShowError(true)
        }
    }


    return(
        <Container className={"rounded w-50 bg-light align-content-center"} style={{marginTop: "10px"}}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" name={"username"} onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name={"password"} onChange={handleChange}/>
                        </Form.Group>
                    </Row>
                    <Row style={{margin: "10px"}}>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Row>

                    {showError ? <Alert variant={"danger"}>Incorrect username and password pair!</Alert>: null}
                </Form>
        </Container>
    )
}

