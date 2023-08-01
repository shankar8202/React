import  { createContext, useState } from 'react'
export let myContext= createContext()
function CreateContaxt({children}) {
    const[theme,setTheme]=useState("red");

    let  changeThemeFunc=()=>{
        setTheme((pre)=>pre==="red"?"green":"red")
    
    }
 
  return (
    <div>
      <myContext.Provider value={{changeThemeFunc,theme}}>
    {children}
      </myContext.Provider>
    </div>
  )
}

export default CreateContaxt
