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
  align-items: top;
  justify-content: center;
  h1 {
    color: #333333;
    text-align: center;
    font-style: italic;
    font-size: 2em;
    margin: 100px 1em;
    text-shadow: 2px 2px rgba(255, 255, 255, 0.3);
    span {
      letter-spacing: 0.2em;
    }
  }

  strong {
    color: #39b73f;
    text-shadow: 2px 2px rgba(0, 0, 0, 0.6);
  }
`

const Home = () => (
  <StyledSection>
    <h1>
      Modern Solutions to <strong>grow</strong>
      <span> </span>
      your business
    </h1>
  </StyledSection>
)

export default Home
