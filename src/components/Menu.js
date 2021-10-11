import React from "react";
import {Alert, Button, Container} from "react-bootstrap";
import {IOModal} from "./IOModal";
import {TransferModel} from "./TransferModel";
import {TransactionsModal} from "./TransactionsModal";
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";
import {AccountDataModal} from "./AccountDataModal";

export const Menu = (props) =>{
    const [account, setAccount] = React.useState(null)
    const [showSignIn, setShowSignIn] = React.useState(true)
    const [showAccountCreated, setShowAccountCreated] = React.useState(false)




    const depositCallback = (amount)=>{
        //props.transaction(props.account.balance + parseInt(amount),"TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
        props.transaction(account, "deposit", parseInt(amount), null)
    }
    const withdrawCallback = (amount)=>{
        //props.transaction(props.account.balance - parseInt(amount),"TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
        props.transaction(account, "withdraw", parseInt(amount), null)

    }
    const transferCallback = (amount, toAccountNum) => {
        let toAccount
        props.accountArray.forEach((current)=> {
            if(parseInt(toAccountNum)===current.id){
                toAccount = current
            }})
        props.transaction(account, "transferTo", parseInt(amount), toAccount)
    }
    const accountIdArray = () =>{
        let accountIds = []
        props.accountArray.forEach((current)=>{
            accountIds.push(current.id)
        })
        return accountIds
    }
    const addAccount = (username, password)=> {
        props.addAccount(username, password)
        setShowAccountCreated(true)
        setShowSignIn(true)

    }
    const signOut = ()=>{
        setAccount(null)
    }

    return (
        <Container>
            {account!=null ?
                <Container>
                    <IOModal type={"deposit"} deposit={depositCallback}/>
                    <IOModal type={"withdraw"} withdraw={withdrawCallback}/>
                    <TransferModel account={account} accountIDArray={accountIdArray()} transfer={transferCallback}/>
                    <TransactionsModal account={account}/>
                    <AccountDataModal account={account}/>
                    <Button onClick={signOut}>Sign out</Button>

                </Container>:
                <Container>
                    {showSignIn ?
                        <Container>
                            {showAccountCreated && <Alert variant={"success"}>Account Created Successfully!</Alert>}
                            <SignIn setAccount={setAccount} accountArray={props.accountArray}/>
                            <Button onClick={()=>{setShowSignIn(false)}}>Sign up</Button>
                        </Container> :
                        <Container>
                            <SignUp addAccount={addAccount} accountArray={props.accountArray}/>
                            <Button onClick={()=>{setShowSignIn(true)}}>Sign in</Button>
                        </Container>}
                </Container>}

        </Container>
    )
}
