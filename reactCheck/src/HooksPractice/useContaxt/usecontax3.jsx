import  { useContext } from 'react';
import { MyContext } from './Useecontaxt1';

function Usecontaxt3() {
  const useCont = useContext(MyContext);

  return (
    <div>
      {`hi my details are ${useCont.name} ${useCont.lname} `}
    </div>
  );
}

export default Usecontaxt3;
