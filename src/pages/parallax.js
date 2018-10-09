import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  height: 100vh;
`

export default class parallax extends Component {
  render() {
    return (
      <ParallaxProvider>
        <ParallaxBanner
          className="your-class"
          layers={[
            {
              image: 'https://imagizer.imageshack.us/a/img922/3413/9bCwVo.jpg',
              amount: 0.3,
              slowerScrollRate: false,
            },
            {
              image: 'https://imagizer.imageshack.us/a/img924/7766/fJsnaI.png',
              amount: 0.1,
              slowerScrollRate: false,
            },
          ]}
          style={{
            height: '500px',
          }}
        >
          <h1>Banner Children</h1>
        </ParallaxBanner>
        <Content />
      </ParallaxProvider>
    )
  }
}
