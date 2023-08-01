// import React from 'react'

function MethodCheck() {
    fetch("jfgfasgfagfkfgkfsbbfbfasbkbkas",{
        method:"POST",
        headers:{
            "additional Info" :"blaw blaw blaw"
        },
        body:JSON.stringify({name:'shankar',lname:"sahu"})
    }).then((data)=>console.log(data)).catch((err)=>console.log(err))
  return (
    <div>
      
    </div>
  )
}

export default MethodCheck
