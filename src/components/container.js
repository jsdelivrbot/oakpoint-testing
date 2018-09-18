import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (max-width: 560px) {
    width: 100%;
  }
`

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
