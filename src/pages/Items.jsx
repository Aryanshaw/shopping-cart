import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import "./Cart.css";
// import CartBtn from '../pages/CartBtn'

// import { CartContext } from './Contextcart'

// import {removeItem} from "./Contextcart"

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

export default function Items(props) {
  const [product, setProduct] = useState(popularProducts);
  const [totalAmount, setTotalAmount] = useState(0);
  let [count, setCount] = useState(0);

  const increment = (id) => {
    let newProductList = product;
    let newTotalAmount = totalAmount;
    newProductList[id].quantity++;
    //  console.log(newProductList[id].quantity++)
    newTotalAmount += newProductList[id].price;

    setCount(count + 1);
    // newTotalAmount = newProductList[id-1].price+newProductList[id].quantity
    setProduct(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrement = (id) => {
    let newProductList = product;
    let newTotalAmount = totalAmount;
    if (newProductList[id].quantity > 0) {
      newProductList[id].quantity--;
      newTotalAmount -= newProductList[id].price;
      count--;
    }
    setCount(count);
    setProduct(newProductList);
    setTotalAmount(newTotalAmount);
  };

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={props.img} alt="imag" />
        </div>

        <div className="title">
          <h2>
            {props.title}: rs {props.price}
          </h2>
          <p>{props.desc}</p>
        </div>

        <div className="add-minus-quantity">
          <Remove
            onClick={() => {
              decrement(props.id);
            }}
          />
          <Amount>{count}</Amount>
          <Add
            onClick={() => {
              increment(props.id);
            }}
          />
        </div>

        <div className="price">Rs {totalAmount}</div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove "></i>
        </div>
      </div>
      <hr id="hr" />


      {/* <CartBtn totalAmount={totalAmount}/> */}
    </>
  );
}

// export default Items
