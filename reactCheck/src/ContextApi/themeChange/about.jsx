import styled from "styled-components"
import { MyContext } from "./theme"
import Header from "./header";
import { useContext } from "react";
let Container =styled.div`
height:100vh;
background-color:${(props)=>(props.theme !== "dark" ? "white" : "black")}
`
const Text = styled.div`
  height: 100vh;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

function About() {
let theme =useContext(MyContext)

    return (
      <Container theme={theme}>
        <Header/>   
        <Text theme={theme}>Text</Text>
      </Container>
    )
  }
  
  export default About