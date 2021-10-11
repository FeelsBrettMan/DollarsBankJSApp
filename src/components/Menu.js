import React from "react";
import {Container} from "react-bootstrap";
import {IOModal} from "./IOModal";
import {TransferModel} from "./TransferModel";

export const Menu = (props) =>{
    const depositCallback = (amount)=>{
        //props.transaction(props.account.balance + parseInt(amount),"TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
        props.transaction("deposit", parseInt(amount), null)
    }
    const withdrawCallback = (amount)=>{
        //props.transaction(props.account.balance - parseInt(amount),"TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
        props.transaction("withdraw", parseInt(amount), null)

    }
    return (
        <Container>
            <IOModal type={"deposit"} deposit={depositCallback}/>
            <IOModal type={"withdraw"} withdraw={withdrawCallback}/>
            <TransferModel/>

        </Container>
    )
}
