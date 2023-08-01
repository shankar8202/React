import { useContext } from "react";
import { MyContext } from "./theme";
import Header from "./header";

const Contact = () => {
  const theme = useContext(MyContext);

  return (
    <div>
      <Header />
      <p>This is my Contact {theme}</p>
    </div>
  );
};

export default Contact;