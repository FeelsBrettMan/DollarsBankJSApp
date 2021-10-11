import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import {Menu} from "./components/Menu";
import {defaultAccount} from "./models/customer_account";
import {Button} from "react-bootstrap";
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
        <Menu transaction={transactionCallback} accountArray={accountArray} addAccount={addAccount}/>
        <Button variant={"primary"} onClick={()=> console.log(accountArray)}>LOG ACCOUNTS</Button>
    </div>
  );
}

export default App;
