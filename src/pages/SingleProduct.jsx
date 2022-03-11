// import { Add, Remove } from '@material-ui/icons'
import React,{useState} from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
// import {products} from '../App'
import {popularProducts} from '../data'
// import {Link} from 'react-router-dom'
// import { mobile } from '../responsive'
import SingleComponent from '../pages/SingleComponent'

const Container = styled.div`
 overflow: hidden;

`



const SingleProduct = (props) => {


const [item,setItem] = useState(popularProducts);

// const [news,setnews] = useState(popularProducts);

    
  return (
  
    <Container>
        <Announcement/>
       <Navbar />
     
       
       {
           item
           .slice(0,1)
           .map((curItem)=>{
               return <SingleComponent key={curItem.id} index={curItem.id} {...curItem}/>
           })
       }
         
       
        
       <Newsletter/>
       <Footer/>
    </Container>
  )
}

export default SingleProduct