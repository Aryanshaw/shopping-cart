import React,{useState} from 'react'
import { Add, Remove } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import {popularProducts} from "../data"
import styled from 'styled-components'
import { mobile } from '../responsive'
import { tablet } from '../responsive'




const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({padding:"10px" ,flexDirection:"column"})}    
${tablet({padding:"30px" ,flexDirection:"column"})}    


`
const ImageContainer = styled.div` 
flex:1;

`
const Image = styled.img` 
width: 90%;
height: 90vh;
object-fit: cover;
${mobile({height:"40vh"})}    
${tablet({height:"70vh"})}    


`

const InfoContainer = styled.div`
flex:1;

padding: 0px 10px 10px 90px;
${mobile({padding:"10px"})}    
${tablet({padding:"20px"})}    


`
const Title  = styled.h1`
font-weight: 200;
`
const Desc = styled.p`
 margin: 20px 0px;
`
const Price = styled.span`
 font-weight: 100;
 font-size: 40px;

`
const Filtercontainer = styled.div`
 width: 50%;
 margin: 30px 0px;
 display: flex;
 justify-content: space-between;
${mobile({width:"100%"})}    
${tablet({width:"100%"})}    


`
const Filter = styled.div`
display: flex;
align-items: center;
`
const Filtertitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const Filtercolor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;

`
const Filtersize = styled.select`
margin-left: 10px;
padding: 5px;
cursor: pointer;

`
const Filtersizeoption = styled.option`

`

const AddContainer = styled.div`
  width: 50%;
 display: flex;
 align-items: center;
 justify-content: space-between;
${mobile({width:"100%"})}    
${tablet({width:"100%"})}    

`
const AmountContainer = styled.div`
  display: flex;
 align-items: center;
 font-weight: 700;
 cursor: pointer;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
 align-items: center;
 justify-content: center;
 margin: 0px 5px;

`
const Button = styled.button`
   
   padding: 15px;
   border: 2px solid teal;
   background-color:white;
   cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover{
        background-color: #029c9c;
        color: white;
    }
`


const SingleComponent = (props) => {

//   const hello = popularProducts()  
 const [quantity , setQuantity] = useState(0);

 const handelQuantity = (type) =>{
    if(type==="dec"){
       quantity>1 && setQuantity(quantity-1);
    } else{
        setQuantity(quantity+1);
       
    }    
}



  return (
    <>
         <Wrapper> 
           <ImageContainer>
               <Image src={props.img} />
            {/* <Image src={props.img} alt="image"/> */}
           </ImageContainer>
           <InfoContainer>
                 <Title>{props.title}</Title>
                 <Desc>{props.desc} {props.description} </Desc>
                 <Price>Rs {props.price}</Price>
                 <Filtercontainer>
                    <Filter>
                        <Filtertitle>Color:</Filtertitle>
                        <Filtercolor color="black"/>
                        <Filtercolor color="gray"/>
                        <Filtercolor color="blue"/>
                    </Filter>
                    <Filter>
                        <Filtertitle>
                            Size
                        </Filtertitle>
                        <Filtersize>
                             <Filtersizeoption>
                                 XS
                             </Filtersizeoption>
                             <Filtersizeoption>
                                 S
                             </Filtersizeoption>
                             <Filtersizeoption>
                                 M
                             </Filtersizeoption>
                             <Filtersizeoption>
                                 L
                             </Filtersizeoption>
                             <Filtersizeoption>
                                 XL
                             </Filtersizeoption>
                        </Filtersize>
                    </Filter>

                </Filtercontainer>
               <AddContainer>
                   <AmountContainer>
                       <Remove onClick= {()=> handelQuantity("dec")}/>
                       <Amount>{quantity}</Amount>
                       <Add onClick= {()=> handelQuantity("inc")}/>
                   </AmountContainer>
                 <Link to="/cart">
                 <Button >Add to cart</Button>
                 </Link>
               </AddContainer>

           </InfoContainer>
       </Wrapper>
    </>
  )
}

export default SingleComponent