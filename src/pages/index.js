import React from 'react'
import { Link } from 'gatsby' //eslint-disable-line
import Layout from '../components/layout'
import styled from 'styled-components'
// sections
import Home from '../components/index-sections/home'
import WhatWeDo from '../components/index-sections/whatwedo'
import Contact from '../components/index-sections/contact'

const IndexPage = () => (
  <Layout>
    <Home />
    <WhatWeDo />
    <Contact />
  </Layout>
)

export default IndexPage
