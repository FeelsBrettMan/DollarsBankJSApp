import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {SignIn} from "./components/SignIn";
import React from "react";
import {Menu} from "./components/Menu";
import {defaultAccount} from "./models/customer_account";
import {Button} from "react-bootstrap";
function App() {


    const [account, setAccount] = React.useState(new defaultAccount(0, "test", "test", 500,["latest", "2nd", "3rd", "4th", "oldest"]))
    const signInCallback = (e) =>{
        console.log(e)
    }
    const transactionCallback = (balance, transactionString) =>{
        account.balance = balance;
        account.addHistory(transactionString)
    }
        return (
    <div className="App">
        {//<SignIn callback={signInCallback}/>
        }
        <Menu account={account} transaction={transactionCallback}/>
        <Button variant={"primary"} onClick={()=> console.log(account)}>LOG ACCOUNT</Button>
    </div>
  );
}

export default App;
