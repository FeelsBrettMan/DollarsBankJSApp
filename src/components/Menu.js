import React from "react";
import {Container} from "react-bootstrap";
import {IOModal} from "./IOModal";
import {TransferModel} from "./TransferModel";
import {TransactionsModal} from "./TransactionsModal";
import {SignIn} from "./SignIn";

export const Menu = (props) =>{
    const [account, setAccount] = React.useState(null)




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
        props.accountArray.forEach((current)=> {
            if(parseInt(toAccountNum)===current.id){
                toAccount = current
            }})
        props.transaction("transferTo", parseInt(amount), toAccount)
    }
    const accountIdArray = () =>{
        let accountIds = []
        props.accountArray.forEach((current)=>{
            accountIds.push(current.id)
        })
        return accountIds
    }

    return (
        <Container>
            {account!=null ? <Container>
                <IOModal type={"deposit"} deposit={depositCallback}/>
                <IOModal type={"withdraw"} withdraw={withdrawCallback}/>
                <TransferModel account={props.account} accountIDArray={accountIdArray()} transfer={transferCallback}/>
                <TransactionsModal account={props.account}/>
            </Container>: <SignIn setAccount={setAccount} accountArray={props.accountArray}/>}

        </Container>
    )
}
