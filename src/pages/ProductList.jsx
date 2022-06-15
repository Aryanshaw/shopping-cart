import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import { mobile } from '../responsive'

const Container= styled.div`

`
const Title  = styled.h1`
margin: 20px;

`

const Filtercontainer = styled.div`
display: flex;
justify-content: space-between;
/* padding: 20px; */

`
const Filter = styled.div` 
  margin: 20px;
  /* padding: 20px; */
${mobile({width:"0px 20px",display:"flex",flexDirection:"column"})}    

`

const FilterText = styled.span`
  font-size: 20px;
  font-weight:600;
  margin-right: 20px;
${mobile({marginRight:"0px"})}    

`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({margin:"10px 0px"})}    

`
const Option  = styled.option`
margin-top: 20px;
/* font-size: 20px; */
padding-top: 20px ;

`

const ProductList = () => {

  // const[product ,setProduct] = useState([]);
  // const[product ,setProduct] = useState([]);

  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Title>Dresses</Title>
      <Filtercontainer>
          <Filter>
              <FilterText>
                  Filter Products: 
                </FilterText>
                  <Select>
                      <Option disabled selected> Color </Option>
                      <Option> White </Option>
                      <Option> Black </Option>
                      <Option> Red </Option>
                      <Option> Blue </Option>
                      <Option> Yellow </Option>
                      <Option> Green </Option>
                  </Select>
                  
                  <Select>
                      <Option disabled selected> Size </Option>
                      <Option> Xs </Option>
                      <Option> S </Option>
                      <Option> M </Option>
                      <Option> L </Option>
                      <Option> XL </Option>
                  </Select>
              
          </Filter>
          <Filter>
          <FilterText>
            Sort Products: 
            </FilterText>
               <Select>
                   <Option selected>Newest</Option>
                   <Option>Price (asc) </Option>
                   <Option>Price (desc) </Option>
               </Select>   
          
          </Filter>

      </Filtercontainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default ProductList