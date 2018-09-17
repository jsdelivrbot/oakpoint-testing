import React from 'react'
import { Link } from 'gatsby' //eslint-disable-line
import Layout from '../components/layout'
import styled from 'styled-components'
// sections
import Home from '../components/index-sections/home'

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
)

export default IndexPage

{
  /* <Link to="/page-2/">Go to page 2</Link> */
}
