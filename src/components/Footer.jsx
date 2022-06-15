import { Link } from 'react-router-dom'
import { Facebook, Instagram, LinkedIn, MailOutline, PhoneOutlined, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { tablet } from '../responsive'

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection:"column"})}
  ${tablet({flexDirection:"column"})}
`
const Left = styled.div`
   flex:1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`
const Logo = styled.h1`
font-family: italic;

`
const Description = styled.p`
margin: 20px 0px;


`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 margin-right: 5px;
`

const Center = styled.div`
   flex:1;
   padding: 20px;
   ${mobile({display:"none"})}
   ${tablet({display:"none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;

`
const ListItem = styled.li` 
 width: 50%;
 margin-bottom: 10px;
 

`

const Right = styled.div`
   flex:1;
   padding: 20px;
   ${mobile({backgroundColor:"#ebebeb", borderRadius:"10px"})}
   ${tablet({backgroundColor:"#ebebeb", borderRadius:"10px"})}
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

`

const Footer = () => {
    const None = {
        textDecoration: 'none',
        color: "black",
      }
    
  return (
    <Container>
      <Left>
          <Logo>O-STORE</Logo>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor placeat, suscipit omnis dolorem a corrupti tenetur, molestias iure error quisquam! Nihil magnam corporis dolor animi a, vero incidunt quae!</Description>
          <SocialContainer>
            
            <a href="https://www.facebook.com/aryan.shaw.5220/" target="blank" style={None}>
             <SocialIcon >
                 <Facebook/>
             </SocialIcon>
             </a>
             <a href="https://www.instagram.com/_lil_weird/" target="blank" style={None}>
             <SocialIcon>
                 <Instagram/>
             </SocialIcon>
             </a>
              <a href="https://www.linkedin.com/in/aryan-shaw-66784418b/" target="blank" style={None}>
             <SocialIcon>
                 <LinkedIn/>
             </SocialIcon>
             </a>
        </SocialContainer>
      </Left>
       <Center>
           <Title>Useful Links</Title>
           <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Men Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accesories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlists</ListItem>
               <ListItem>Terms</ListItem>
               <ListItem>Help!</ListItem>
           </List>
       </Center>
       <Right>
           <Title>Contact</Title>
           <ContactItem> <Room style={{marginRight:"10px"}} />
               64 Shantinikatan , South kolkata 822919
           </ContactItem>
           <ContactItem> <PhoneOutlined style={{marginRight:"10px"}} />
               +91 827 486 2311
           </ContactItem>
           <ContactItem> <MailOutline style={{marginRight:"10px"}} />
               contactOishik@gmail.com
           </ContactItem>
       </Right>
    </Container>
  )
}

export default Footer
