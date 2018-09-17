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
  .box {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    color: #333333;
    text-align: center;
    font-style: italic;
    .middle-text {
      font-size: 1.2em;
      strong {
        color: #39b73f;
        text-decoration: underline;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.6);
      }
    }
  }
`

const Home = () => (
  <StyledSection>
    <div class="box">
      <h1>
        Modern Solutions
        <br />
        <span class="middle-text">
          to <strong>grow</strong>
        </span>
        <br />
        your business
      </h1>
    </div>
  </StyledSection>
)

export default Home
