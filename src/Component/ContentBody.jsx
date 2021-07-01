import React from 'react';

const ram = {
    display: "inline-block",
    width: "120px",
    backgroundColor: "blue",
    minHeight: "60px",
    lineHeight: "60px",
    textAlign:'center',
    borderRadius: "9px 27px 27px 9px",
    margin:"15px"
}

const Ram = () => {
    return(
        <div style={ram}>Ram Ji</div>
    )
}
const contentBody = {
    width: "100%",
    backgroundColor: "gray",
    minHeight: "450px",
    borderRadius: "9px",
    marginTop:"15px"
}
class ContentBody extends React.Component{

    render(){
        return(
           <div style={contentBody}>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>
               <Ram/>

            </div>
        )
    }
}

export default ContentBody ;