import React from "react"
class ClassComp2 extends React.Component{
    render(){
        return (
            
           <>
            <h1>hello</h1>
            <h1>hello {this.props.val}</h1>
           </>
        )
    }
}
export default ClassComp2