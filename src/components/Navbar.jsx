import React, { useState } from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { popularProducts } from "../data";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  height: 90px;
  width: 100%;
  ${mobile({ height: "70px" })}
  ${tablet({ height: "100px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  ${mobile({ padding: "25px 0px" })}
  ${tablet({ padding: "30px 10px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "4px" })}
`;

const Input = styled.input`
  border: none;
  ${"" /* ${mobile({width:"43px" })} */}
  ${tablet({ width: "53px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  font-family: italic;
  ${tablet({ fontSize: "23px", marginLeft: "39px" })}
  ${mobile({ fontSize: "20px", marginLeft: "15px", marginRight: "-10px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: "2", justifyContent: "center" })}
  ${tablet({ flex: "1.8", justifyContent: "center" })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "11px", marginLeft: "15px" })}
  ${tablet({ marginLeft: "15px" })}
`;

const Navbar = () => {
  const None = {
    textDecoration: "none",
    color: "black",
  };

  const [Quantity, SetQuantity] = useState(1);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Link to="/shopping-cart" style={None}>
          <Center>
            <Logo>A-STORE</Logo>
          </Center>
        </Link>
        <Right>
          <Link to="/register" style={None}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={None}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart" style={None}>
            <MenuItem>
              <Badge badgeContent={popularProducts.length} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
