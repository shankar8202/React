import{useState} from 'react'
import CompB from './compB'

function CompA() {
  const [value , setValue] = useState("")
    function onChangee(e){
        setValue(e.target.value)
    }
  return (
    <div>
      <input type="text"onChange={onChangee}/>
      <CompB value ={value}/>
    </div>
  )
}

export default CompA
