// import React from 'react'
// import Hoc2 from "./Hoc2"
function HocFunc(props) {
  return (
    <div>
     <h1 style={{backgroundColor:"gray",color:"yellow"}}> <props.another/> yes i reached in child compo</h1>
    </div>
  )
}

export default HocFunc
