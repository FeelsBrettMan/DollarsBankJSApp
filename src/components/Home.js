import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";

export const SignIn = (props) => {

    const initFormData = Object.freeze({
        username: "",
        password: "",
    })
    const [formData, updateFormData] = React.useState(initFormData)

    const handleChange = (e) => {
        updateFormData({...formData,
            [e.target.name]: e.target.value.trim()})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <Container className={"rounded w-50 bg-light align-content-center"} style={{marginTop: "10px"}}>
            {localStorage.getItem("userId") ===null ?
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

                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form> : <h3>You are signed in!</h3>
            }

        </Container>


    )
}

