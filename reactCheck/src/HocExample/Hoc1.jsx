// import React from 'react'
import Hoc2 from "./Hoc2";
import HocFunc from "./HocFunc";

function Hoc1() {
  return (
    <div>
      <HocFunc another={Hoc2} />
    </div>
  )
}

export default Hoc1
