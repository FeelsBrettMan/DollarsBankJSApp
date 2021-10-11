import React from "react";
import {Container} from "react-bootstrap";
import {IOModal} from "./IOModal";
import {TransferModel} from "./TransferModel";
import {logDOM} from "@testing-library/react";

export const Menu = (props) =>{
    const depositCallback = (amount)=>{
        //props.transaction(props.account.balance + parseInt(amount),"TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
        props.transaction("deposit", parseInt(amount), null)
    }
    const withdrawCallback = (amount)=>{
        //props.transaction(props.account.balance - parseInt(amount),"TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
        props.transaction("withdraw", parseInt(amount), null)

    }
    const transferCallback = (amount, toAccountNum) => {
        let toAccount
        console.log(props.accountArray[1].id)
        props.accountArray.forEach((current)=> {
            if(parseInt(toAccountNum)===current.id){
                toAccount = current
            }})
        console.log(toAccount)
        props.transaction("transferTo", parseInt(amount), toAccount)
    }
    return (
        <Container>
            <IOModal type={"deposit"} deposit={depositCallback}/>
            <IOModal type={"withdraw"} withdraw={withdrawCallback}/>
            <TransferModel account={props.account} transfer={transferCallback}/>

        </Container>
    )
}
