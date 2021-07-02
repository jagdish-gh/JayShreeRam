import React from 'react';

const middlebar = {
    width: "100%",
    backgroundColor: "gray",
    minHeight: "50px",
    borderRadius: "9px",
    marginTop:"15px",
    borderRadius: "9px",
    lineHeight:"60px",
    textAlign:"center",
    fontSize:"26px"
}
const todayS = {
    display:"inline-block",
    width: "50%",
    lineHeight:"50px",
    textAlign: "center",
    textAlign:"center",
    fontSize:"26px"
}
const totalS = {
    display:"inline-block",
    width: "50%",
    lineHeight:"50px",
    textAlign: "center",
    textAlign:"center",
    fontSize:"26px"
}

class MiddleBar extends React.Component{

    render(){
        const {today,total} = this.props;
        return(
           <div style={middlebar}>
               <div style={todayS}>Today's Count : {today}</div>
               <div style={totalS}>Total Count : {total}</div>
           </div>
        )
    }
}

export default MiddleBar ;