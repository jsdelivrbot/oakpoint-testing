import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  text-align: center;
  font-size: 0.6em;
  margin-top: auto;
  border-top: 3px solid #333;
  border-bottom: 3px solid #333;
  color: #fff;
  padding: 0.5em 0;
  background-color: #39b73f;
  font-family: montserrat, sans-serif;
`

const Footer = () => (
  <StyledFooter>
    Copyright © {new Date().getFullYear()} Oakpoint Digital. All rights
    reserved.
  </StyledFooter>
)

export default Footer
