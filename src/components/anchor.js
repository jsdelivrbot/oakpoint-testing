import React from 'react'
import styled from 'styled-components'

const StyledAnchor = styled.div`
  position: relative;
  top: -67px;
`

const Anchor = ({ anchor }) => <StyledAnchor id={anchor} />

export default Anchor
