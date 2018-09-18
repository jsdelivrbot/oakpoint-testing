import React from 'react'
import { Link } from 'gatsby' //eslint-disable-line
import styled from 'styled-components'
import Container from '../container'

const StyledSection = styled.section`
  color: #333;
  .header {
    background-color: #39b73f;
    border-top: 3px solid #333;
    border-bottom: 3px solid #333;
    h2 {
      text-align: center;
      padding: 1.2em 0;
      margin: 0;
    }
  }
  .puzzle {
    border-top: 1px solid rgb(241, 246, 251);
    padding-bottom: 25px;
    background: linear-gradient(
        to bottom,
        rgba(241, 246, 251, 0.95) 0%,
        rgba(241, 246, 251, 0.95) 50%,
        rgba(241, 246, 251, 0.95) 100%
      ),
      url(https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/jigsaw.svg);

    h3 {
      text-align: center;
      padding: 1em;
      margin: 0;
    }
    .services {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      margin: 0 auto;
      .co {
        text-align: center;
        width: 30%;
        max-width: 330px;
        border: 1px solid #ccc;
        padding: 15px 3%;
        min-width: 255px;
        margin: 20px 10px;
        background: #f1f6fa;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
        svg {
          width: 35%;
          fill: #333;
        }
        h4 {
          font-size: 1.3em;
        }
        p {
          font-family: montserrat;
          letter-spacing: 2px;
          text-align: left;
          color: #555;
        }
      }
    }
  }
  .tech {
    text-align: center;
    background: #fefefe;
    border-top: 3px solid #333;
    border-bottom: 3px solid #333;
    h3 {
      padding: 1em 0.3em;
      margin: 0;
    }
    #technologies {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      flex-wrap: wrap;
      img {
        margin: 20px;
        max-height: 60px;
      }
    }
  }
`

const WhatWeDo = () => (
  <StyledSection>
    <div className="header">
      <h2>FULL SERVICE WEB SOLUTIONS</h2>
    </div>
    <div className="puzzle">
      <Container>
        <h3>
          We develop modern web solutions that strengthen brands and produce
          results
        </h3>
        <div className="services">
          <div className="co col1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
            </svg>
            <h4>Design</h4>
            <hr />
            <p>
              Creative solutions uniquely crafted to enhance your brand and
              create exceptional first impressions.
            </p>
          </div>
          <div className="co col2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
            <h4>Development</h4>
            <hr />
            <p>
              Professionally developed websites that are fast, responsive, and
              easily maintained.
            </p>
          </div>
          <div className="co col3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
            <h4>SEO</h4>
            <hr />
            <p>
              Best practices used at all stages of development to boost your
              search engine rankings.
            </p>
          </div>
        </div>
      </Container>
    </div>
    <div className="tech">
      <h3>
        We work with industry leading technologies to deliver high quality work
      </h3>
      <div id="technologies">
        <img src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/i-tech-wordpress.svg" />
        <img src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/i-tech-woo.svg" />
        <img src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/i-tech-reactjs.svg" />
        <img src="https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/i-tech-shopify.svg" />
      </div>
    </div>
  </StyledSection>
)

export default WhatWeDo
