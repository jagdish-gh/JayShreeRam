import React from 'react';
import Navbar from './Navbar.jsx';
import MiddleBar from './MiddleBar.jsx';
import ContentBody from './ContentBody.jsx';

class HomePage extends React.Component{

    render(){
        return(
            [
            <Navbar/>,
            <MiddleBar/>,
            <ContentBody/>
            ]
            
        )
    }
}

export default HomePage;