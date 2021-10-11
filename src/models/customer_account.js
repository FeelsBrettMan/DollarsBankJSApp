export class defaultAccount {
    _id= 0
    _username= "test"
    _password= "test"
    _balance= 500
    _history= ["latest", "2nd", "3rd", "4th", "oldest"]

    constructor(id, username, password, balance, history) {
        this._id = id;
        this._username = username;
        this._password = password;
        this._balance = balance;
        this._history = history;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get username() {
        return this._username;
    }

    set username(value) {
        this._username = value;
    }

    get password() {
        return this._password;
    }

    set password(value) {
        this._password = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    get history() {
        return this._history;
    }

    addHistory = (transaction)=>{
        this._history.push(transaction)
        if(this._history.length > 5){
            this._history.shift();
        }
    }

    doTransaction = (transType, amount, transferAccount) =>{
        console.log(transType + ": "+ amount)
        switch (transType){
            case "withdraw":
                this.balance = this.balance - amount
                this.addHistory("TIME: "+ new Date().toLocaleString()+" WITHDRAW: $"+amount)
                break
            case "deposit":
                this.balance = this.balance + amount
                this.addHistory("TIME: "+ new Date().toLocaleString()+" DEPOSIT: $"+amount)
                break
            case "transferTo":
                this.balance = this.balance - amount
                this.addHistory("TIME: "+ new Date().toLocaleString()+" TRANSFER: $"+amount + " TO ACCOUNT: " + transferAccount)
                break
            case "transferFrom":
                this.balance = this.balance + amount
                this.addHistory("TIME: "+ new Date().toLocaleString()+" TRANSFER: $"+amount + " FROM ACCOUNT: " + transferAccount)
                break
            default:
                console.log("ERROR invalid operation")
        }
    }
}
