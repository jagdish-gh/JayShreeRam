import React from 'react';

const navbar = {
    width: "100%",
    backgroundColor: "gray",
    minHeight: "60px",
    borderRadius: "9px",
    lineHeight:"60px",
    textAlign:"center",
    fontSize:"26px"
}

class NavBar extends React.Component{

    render(){
        return(
           <div style={navbar}>Jay Shree Ram</div>
        )
    }
}

export default NavBar ;