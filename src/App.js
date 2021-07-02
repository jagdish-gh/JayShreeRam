import React from 'react';
import {hot} from "react-hot-loader";
import Login from "./Component/Login";
import HomePage from "./Component/HomePage.jsx";

const AppStyle = {
    // backgroundColor:"red",
    padding:"20px 10px 20px 10px"
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : true,

        }
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        return(
            <div style={AppStyle}>
                {!isLoggedIn &&<Login/>}
                {isLoggedIn &&<HomePage/>}
            </div>
        )
    }
}

export default hot(module)(App);