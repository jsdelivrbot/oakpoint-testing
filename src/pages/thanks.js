import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Layout from '../components/layout'

const StyledThanksPg = styled.div`
  font-family: montserrat, sans-serif;
  text-align: center;
  margin-top: 90px;
  p {
    font-size: 1.2em;
  }
  img {
    max-width: 80%;
  }
`
const Thanks = () => (
  <Layout>
    <StyledThanksPg>
      <h1>Thank You</h1>
      <img
        src="https://imagizer.imageshack.us/a/img924/1928/t8jA0c.jpg"
        alt="success kid"
      />
      <h3>Your message has successfully been submitted.</h3>
      <p>
        <Link to="/">Back to Home Page</Link>
      </p>
    </StyledThanksPg>
  </Layout>
)
export default Thanks
