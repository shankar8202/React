import { createContext } from 'react';
import UseContaxt2 from './useContaxt2';

export const MyContext = createContext();

function Usecontaxt1() {
  const details = {
    name: "shankar",
    lname: "sahu"
  };

  return (
    <MyContext.Provider value={details}>
      <UseContaxt2 />
    </MyContext.Provider>
  );
}

export default Usecontaxt1;

