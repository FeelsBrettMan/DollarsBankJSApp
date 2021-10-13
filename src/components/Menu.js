import React, {useState} from "react";
import {Alert, Button, Container, Stack} from "react-bootstrap";
import {IOModal} from "./IOModal";
import {TransferModel} from "./TransferModel";
import {TransactionsModal} from "./TransactionsModal";
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";
import {AccountDataModal} from "./AccountDataModal";

export const Menu = (props) =>{
    const [account, setAccount] = useState(null)
    const [showSignIn, setShowSignIn] = useState(true)
    const [showAccountCreated, setShowAccountCreated] = useState(false)
    const [showAmountError, setShowAmountError] = useState(false)



    const depositCallback = (amount)=>{

        props.transaction(account, "deposit", parseFloat(amount), null)
        setShowAmountError(false)
    }
    const withdrawCallback = (amount)=>{
        if(parseFloat(amount)<=account.balance){
            props.transaction(account, "withdraw", parseFloat(amount), null)
            setShowAmountError(false)

        }
        else setShowAmountError(true)
    }
    const transferCallback = (amount, toAccountNum) => {
        if(parseFloat(amount)<=account.balance) {
            let toAccount
            props.accountArray.forEach((current) => {
                if (parseInt(toAccountNum) === current.id) {
                    toAccount = current
                }
            })
            props.transaction(account, "transferTo", parseFloat(amount), toAccount)
            setShowAmountError(false)
        }
        else setShowAmountError(true)
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
                <Stack gap={3}>
                    {showAmountError && <Alert variant={"danger"}> TRANSACTION FAILED: Can not withdraw or transfer more than balance!</Alert>}
                    <IOModal type={"deposit"} deposit={depositCallback}/>
                    <IOModal type={"withdraw"} withdraw={withdrawCallback} balance={account.balance}/>
                    <TransferModel account={account} accountIDArray={accountIdArray()} transfer={transferCallback}/>
                    <TransactionsModal account={account}/>
                    <AccountDataModal account={account}/>
                    <Button onClick={signOut}>Sign out</Button>

                </Stack>:
                <Container>
                    {showSignIn ?
                        <Container>
                            {showAccountCreated && <Alert variant={"success"}>Account Created Successfully!</Alert>}
                            <SignIn setAccount={setAccount} accountArray={props.accountArray}/>
                            <Button onClick={()=>{setShowSignIn(false)}}>Sign up</Button>
                        </Container> :
                        <Container >
                            <SignUp addAccount={addAccount} accountArray={props.accountArray} />
                            <Button style={{ margin: "10px", padding:"10px"}} onClick={()=>{setShowSignIn(true)}}>Sign in</Button>
                        </Container>}
                </Container>}

        </Container>
    )
}
