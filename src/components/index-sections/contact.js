import React from 'react'
import Container from '../container'
import styled from 'styled-components'
import NetlifyContact from '../netlify-contact'

const StyledSection = styled.section`
  height: 100vh;
`

const Contact = () => (
  <StyledSection>
    <h2>why</h2>
    <NetlifyContact />
  </StyledSection>
)

export default Contact
