import React from 'react';

const ram = {
    display: "inline-block",
    width: "120px",
    backgroundColor: "blue",
    minHeight: "60px",
    lineHeight: "60px",
    textAlign:'center',
    borderRadius: "9px 27px 27px 9px",
    margin:"15px",
    backgroundColor: "#f7a326",
    fontSize: "xx-large",
    border: "0"
}

const Ram = () => {
    return(
        <div style={ram}>Ram</div>
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
    constructor(props){
        super(props);
        this.state = {
            inputValue : ""
        }
    }
    onChange = (event) =>{
        const addOneMore = this.props;
        const value = event.target.value;
        if(value.length<4){
            this.setState({
                inputValue:event.target.value
            });
        }
        if(value === "Ram"){
            this.props.addOneMore();
            this.setState({
                inputValue:""
            });
        }
        
       
    }
    componentDidMount() {
        this.searchInput.focus();
      }
    render(){
        let today = this.props.today;
        const inputValue = this.state.inputValue;
        const content = [];
        while(today>0){
            content.push(Ram());
            today--;
        }
        return(
           <div style={contentBody}>
               {content}
               <input style={ram} 
                    ref={inputEl => (this.searchInput = inputEl)}
                    type="text" value={inputValue} onChange={this.onChange} />
            </div>
        )
    }
}

export default ContentBody ;