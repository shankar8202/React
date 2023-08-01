// import React from 'react'
import { useContext } from "react"
import Header from "./themeChange/header"
import { MyContext } from "./themeChange/theme"
import styled from "styled-components";
let Container=styled.div`
height:100vh;
background-color:${(props)=>(props.theme !=="dark" ? "white" : "black")}
`
const Text = styled.div`
  height: 100vh;
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
`;


function Home() {
    let theme =useContext(MyContext)
  return (                           // theme from ln 17 pass to container
    <Container theme={theme}>     
        
        <Header/>
      <Text theme={theme}> helo this is home</Text>
    </Container>
  )
}

export default Home
