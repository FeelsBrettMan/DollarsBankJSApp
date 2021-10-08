import React from "react";
import {Container} from "react-bootstrap";
import {IOModal} from "./IOModal";

export const Menu = (props) =>{
    const depositCallback = (amount)=>{
        console.log(amount)
        console.log(props.account.balance + parseInt(amount))
    }
    const withdrawCallback = (amount)=>{
        console.log(amount)
    }
    return (
        <Container>
            <IOModal type={"deposit"} deposit={depositCallback}/>
            <IOModal type={"withdraw"} withdraw={withdrawCallback}/>

        </Container>
    )
}
