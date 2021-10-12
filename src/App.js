import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Menu} from "./components/Menu";
import {defaultAccount} from "./models/customer_account";
import {Container, Stack} from "react-bootstrap";
function App() {

    const accountArray = [
        new defaultAccount(0, "test", "test", 500,["initial"]),
        new defaultAccount(1, "test2", "test2", 100,["initial"])
    ]

    const addAccount = (username, password) =>{
        accountArray.push(new defaultAccount(accountArray.length, username, password, 0, ["ACCOUNT CREATED"]))
    }

    const transactionCallback = (account, transType, amount, transferAccount) =>{
        account.doTransaction(transType, amount, transferAccount)
        if(transferAccount){
            transferAccount.doTransaction("transferFrom", amount, account)
        }
    }
        return (
    <div className="App">
        <Container className={"rounded w-50 bg-light align-content-center"} style={{marginTop: "10px"}}>
            <Stack direction={"horizontal"} gap={3}>
                <Menu transaction={transactionCallback} accountArray={accountArray} addAccount={addAccount}/>
            </Stack>

        </Container>

    </div>
  );
}

export default App;
