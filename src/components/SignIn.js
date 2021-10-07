import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {defaultAccount} from "../models/customer_account";
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
        console.log(formData)
        let da = new defaultAccount(0, "test", "test", 500,["latest", "2nd", "3rd", "4th", "oldest"]);
        if(da.username===formData.username && da.password ===formData.password){
            console.log("sign in success")
            props.callback(da)
        }
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

