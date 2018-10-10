import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import '../components/layout.css'
import treeImg from '../images/Parav4tree.png'
import skyImg from '../images/Parav4sky.jpg'
import WhatWeDo from '../components/index-sections/whatwedo'

const MainSlider = styled.div`
  background-color: #282828;
  height: 600px;
  @media only screen and (max-width: 730px) {
    height: 535px;
  }
  @media only screen and (max-width: 600px) {
    height: 440px;
  }
  @media only screen and (max-width: 600px) {
    height: 440px;
  }
  @media only screen and (max-width: 500px) {
    height: 360px;
  }
  @media only screen and (max-width: 400px) {
    height: 290px;
  }
`
const Banner = styled(ParallaxBanner)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  height: 100vh;
  background: #131218;
  /* background: #ccc; */
`

const SliderText = styled.div`
  margin-top: -10%;
  text-align: center;
  position: relative;
  h1 {
    font-size: 28px;
    line-height: 28px;
    font-weight: 700;
    font-family: montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    letter-spacing: 2px;
    margin: 0;
    background-color: #46b24d;
    padding: 5px 7px 4px 7px;
    color: #fff;
    text-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  }
  p {
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 1px 6px;
    background-color: rgba(0, 0, 0, 0.3);
    width: fit-content;
    margin: 10px auto 0 auto;
  }
`

const Home = () => (
  <div>
    <Header />
    <MainSlider>
      <ParallaxProvider>
        <Banner
          className="your-class"
          layers={[
            {
              image: skyImg,
              amount: 0.2,
              slowerScrollRate: 1,
            },
            {
              image: treeImg,
              amount: 0,
              slowerScrollRate: false,
            },
          ]}
          style={{
            height: '100%',
          }}
        >
          <SliderText>
            <h1>OAKPOINT DIGITAL</h1>
            <p>Modern Solutions to Grow Your Business</p>
          </SliderText>
        </Banner>
      </ParallaxProvider>
    {/* </MainSlider> */}
    <WhatWeDo />
    <Content />
  </div>
)

export default Home
