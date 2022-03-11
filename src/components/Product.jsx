import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom';


const Info = styled.div`
  opacity: 0;
  width: 100%;
   height: 100%;
   position: absolute;
   display:flex;
   top: 0;
   left:0;
   z-index:3;
   background-color: rgba(0,0,0,0.2);
   align-items:center;
   justify-content: center;
  transition: all 0.5s ease;

`


const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 290px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f8f8;
  position: relative;
  

  &:hover ${Info}{
      opacity:1;
  }
`
const Circle = styled.div`
   width: 200px;
   height: 200px;
   border-radius: 50%;
   /* background-color: white; */
   position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
  filter: drop-shadow(0rem 0.4rem 0.5rem );

`

const Icon = styled.div`
 /* display:flex; */
   /* position: absolute; */

   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color:white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;


  &:hover{
      background-color: #e3e3fd;
      transform: scale(1.2);
  }

`     

const Product = ({item}) => {

  const None = {
    textDecoration: 'none',
    color: "black",
  }

  

  return (
    <Container>
    <Circle/>
    <Image src={item.img}/>
     <Info>
       <Link to="./cart" style={None}>
         <Icon>
             <ShoppingCartOutlined/>
         </Icon>
         </Link>
         <Link to="/singleproduct" style={None}>
         <Icon>
             <SearchOutlined/>
         </Icon>
         </Link>
         <Link to="/error" style={None}>
         <Icon>
             <FavoriteBorderOutlined/>
         </Icon>
         </Link>
     </Info>

    </Container>
  )
}

export default Product