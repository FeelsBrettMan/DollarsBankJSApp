import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {SignIn} from "./components/SignIn";
import React from "react";
function App() {


    const [account, setAccount] = React.useState({})
    const signInCallback = (e) =>{
        console.log(e)
    }

        return (
    <div className="App">
      <SignIn callback={signInCallback}/>
    </div>
  );
}

export default App;
