import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`
overflow: hidden;
width: 100%;
height: 100vh;
background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),  url("https://images.wallpaperscraft.com/image/single/pocket_watch_chain_clothes_114334_1920x1080.jpg") center ;
background-size : cover ;
display: flex;
  align-items: center;
  justify-content: center;

 `

 const Wrapper = styled.div`
padding: 20px;
width: 25%;
background-color: #ffffff8f; 
${mobile({width:"75%"})}    
 `
 const Title  = styled.h1` 
 font-size: 24px;
 font-weight: 300;

 `

const  Form = styled.form`
    display: flex;
    flex-direction: column;

`
const Input = styled.input` 
  flex:1;
  min-width: 40%;
  margin:  10px 0px ;
  padding: 10px;

`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    margin-top: 10px;
`
const Links = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;

`


const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            <Input placeholder="username"/>
            <Input placeholder="password"/>
           
          <Button>SIGN IN</Button>
          <Links>FORGOT PASSWORD? </Links>
          <Link to="/register">
          <Links>CREATE A NEW ACCOUNT</Links>
          </Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login