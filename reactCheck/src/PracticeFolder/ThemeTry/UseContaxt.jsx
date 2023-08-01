import  { useContext } from 'react'
import { myContext } from './CreateContaxt'
function UseContaxt() {
 let {changeThemeFunc,theme} = useContext(myContext)
  return (
    <div style={{height:"100%" }}>
      <button onClick={changeThemeFunc} >change</button>
      <p>your color is = {theme}</p>
    </div>
  )
}

export default UseContaxt
