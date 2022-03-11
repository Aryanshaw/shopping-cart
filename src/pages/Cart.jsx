import { Add, Remove } from "@material-ui/icons";
import React, { createContext, useContext, useReducer, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Cart.css";
import { Link } from "react-router-dom";
import Items from "./Items";
import { popularProducts } from "../data";
import { Scrollbars } from "react-custom-scrollbars-2";
import { mobile } from "../responsive";
// import { CartContext } from './Contextcart'

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  overflow: hidden;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Topbutton = styled.button`
  padding: 10px;
  font-weight: 600;
  margin-top: 10px;
  cursor: pointer;
  ${mobile({ width: "75%", fontSize: "11px", marginLeft: "16px" })}
`;

const Bottom = styled.div``;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
// export const CartContext = createContext(popularProducts);
// const reducer=(state,action)=>{
//     return state
// }

const Cart = (props) => {
  // const style=

  const [item, setItem] = useState(popularProducts);
  const [totalAmount, setTotalAmount] = useState(0);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <p className="total-items" style={{ textAlign: "center" }}>
          you have <span classname="total-items-count"> {item.length}</span>{" "}
          items in shopping cart
        </p>
        <Top>
          <Link to="/productlist">
            <Topbutton>CONTINUE SHOPPING</Topbutton>
          </Link>
          <Link to="*">
            <Topbutton>CHECKOUT NOW</Topbutton>
          </Link>
        </Top>
        {/* <Bottom></Bottom> */}

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {item.map((curItem) => {
                return (
                  <Items key={curItem.id} index={curItem.id} {...curItem} />
                );
              })}
            </Scrollbars>
          </div>
        </div>

        <div className="card-total">
          <h3>
            Cart Total: <div> {totalAmount} rs</div>
          </h3>
          <Link to="*">
            <button className="btn btn-success ">checkout</button>
          </Link>
        </div>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
