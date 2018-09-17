import React from 'react'
import { Link } from 'gatsby' //eslint-disable-line
import styled from 'styled-components'

const StyledSection = styled.section`
  background: url(https://imagizer.imageshack.us/a/img922/3413/9bCwVo.jpg)
    no-repeat center center fixed;
  background-color: #abc;
  background-size: cover;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

const Home = () => (
  <StyledSection>
    <h2>Hi</h2>
  </StyledSection>
)

export default Home
