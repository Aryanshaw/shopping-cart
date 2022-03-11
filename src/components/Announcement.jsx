import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:30px;
  background-color: teal;
  color: white;
  align-items: center;
  text-align : center;
  justify-content: center;
  font-size:14px;
  font-weight:500;
  
`

const Announcement = () => {
  return (
    <Container> 50 ruppiya ka chaddi </Container>
  )
}

export default Announcement