import React from 'react'
import Header from '../components/header'
import styled from 'styled-components'
import '../components/layout.css'

const MainSlider = styled.div`
  background-color: #282828;
  background: url(https://www.portotheme.com/wordpress/porto/digital-agency/wp-content/uploads/sites/34/2016/08/slide-corporate-6.jpg)
    no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
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
const SliderText = styled.div`
  margin-top: 70px;
  text-align: center;
  h1 {
    font-size: 56px;
    line-height: 62px;
    font-weight: 700;
    font-family: montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    letter-spacing: 2px;
    margin: 0;
    background-color: #46b24d;
    padding: 10px 14px 8px 14px;
    color: #fff;
    text-shadow: rgba(0, 0, 0, 0.25) 2px 2px 4px;
  }
  p {
    color: #fff;
    font-weight: 400;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 6px 12px;
    background-color: rgba(0, 0, 0, 0.4);
    width: fit-content;
    margin: 10px auto 0 auto;
  }
`

const Home = () => (
  <div>
    <Header />
    <MainSlider>
      <SliderText>
        <h1>OAKPOINT DIGITAL</h1>
        <p>Modern Solutions to Grow Your Business</p>
      </SliderText>
    </MainSlider>
  </div>
)

export default Home
