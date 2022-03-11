import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import "./Slider.css";
import styled from "styled-components";
import image from "../Assets/dress1.jpg";
import images2 from "../Assets/dress2.jpg";
import image3 from "../Assets/spring.jpeg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { tablet } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh; //viewport height
  display: flex;
  background-color: #f1a88e;
  position: relative;
  overflow: hidden;
  ${mobile({ width: "100vw", height: "80vw", marginBottom: "30px" })}
  ${tablet({
    width: "100vw",
    height: "120vw",
    marginBottom: "30px",
    overflow: "hidden",
  })}
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
// const Image = styled.img`
//   height: 500px;
//   /* width: 300%; */

//   position: absolute;
//   top: 50%;
//   left: 9%;

//   transform: translate(-50%, -50%);
//   object-fit: contain;
//   -o-object-fit: contain;
//   z-index: 2;

//   ${mobile({ height: "252px", top: "52%" })}
//    ${'' /* ${tablet({ height:"400px" , top:"50%"})}  */}
// `;

const InfoContainer = styled.div`
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 40px;
  margin-left: 40px;

  ${"" /* text-align: center; */}
  /* left:50%; */
  ${tablet({
    fontSize: "20px",
    padding: "25px",
    marginBottom: "170px",
    textAlign: "center",
  })}
  ${mobile({
    fontSize: "10px",
    padding: "15px",
    marginBottom: "350px",
    textAlign: "center",

  })}
`;

const Title = styled.h1`
  font-size: 50px;

  /* position: absolute; */
  ${"" /* display: flex;  */}
  ${"" /* text-align:center; */}
 ${tablet({ fontSize: "30px" , marginLeft:"10px"})}
 ${mobile({ fontSize:"20px" , marginLeft:"-2px"})}
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${"" /* text-align:center; */}

  ${tablet({ fontSize: "20px", fontWeight: "500", letterSpacing: "2px" })}
 ${mobile({ fontSize:"10px" , fontWeight:"700",marginLeft:"-10px"})}
   
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;

  ${tablet({ fontSize: "20px", padding: "15px" })}
  ${mobile({ fontSize: "10px", padding: "10px",marginLeft:"-15px"})} })}}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #d8cdcd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  ${mobile({ width: "35px", height: "35px" })}
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  // const onclick=()=>{
  //      <Link to="/productlist"></Link>
  // }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handelClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide bg="f5fafd">
          <ImageContainer>
            <img className="img1" src={image} alt="img" />
          </ImageContainer>
          <InfoContainer >
            <Title  style={{ display: "flex" }}>SUMMER SALE!!</Title>
            <Desc>NEW ARRIVALS! SHOP NOW</Desc>
            <Link to="/productlist">
              <Button> BUY MORE</Button>
            </Link>
          </InfoContainer>
        </Slide>
        <Slide bg="FEDDD6">
          <ImageContainer>
            <img className="img2" src={images2} alt="imag" />
          </ImageContainer>
          <InfoContainer>
            <Title style={{ display: "flex" }}>WINTER SALE!!</Title>
            <Desc>NEW ARRIVALS! SHOP NOW</Desc>
            <Link to="/productlist">
              <Button> BUY MORE</Button>
            </Link>
          </InfoContainer>
        </Slide>
        <Slide bg="FCC7DE">
          <ImageContainer>
            <img className="hello" src={image3} alt="hi" />
          </ImageContainer>
          <InfoContainer>
            <Title style={{ display: "flex" }}>SPRING SALE!!</Title>
            <Desc>NEW ARRIVALS! SHOP NOW</Desc>
            <Link to="/productlist">
              <Button> BUY MORE</Button>
            </Link>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handelClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
