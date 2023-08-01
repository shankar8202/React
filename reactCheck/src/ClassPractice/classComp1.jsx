import React from "react"
import ClassComp2 from "./classComp2"
class ClassComp1 extends React.Component  {
    constructor(){
        super();
        this.state={
            count:50,
            count2:100
        }
    }
      
    render(){
         const{count,count2}=this.state
        return (
          <>
            <ClassComp2 val={"shankar" } />
            <h1>{count2}</h1>
            <h1>{count}</h1>
          </>
        )
    }
}
export default ClassComp1;