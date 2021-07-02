import React from 'react';
import Navbar from './Navbar.jsx';
import MiddleBar from './MiddleBar.jsx';
import ContentBody from './ContentBody.jsx';

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            today:10,
            total:10
        }
    }
    addOneMore =  ()=>{
        this.setState({today:this.state.today+1,
            total:this.state.total+1
        })
    }
    render(){
        const {today,total} = this.state;
        return(
            [
            <Navbar/>,
            <MiddleBar today={today} total={total}/>,
            <ContentBody today={today} addOneMore={this.addOneMore}/>
            ]
            
        )
    }
}

export default HomePage;