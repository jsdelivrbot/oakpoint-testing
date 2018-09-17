import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  width: 100%;
  transition: 2s;
  .brand-and-toggle {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .nav-brand {
      flex-grow: 1;
      img {
        height: 40px;
        margin: 10px 15px;
        transition: 0.3s;
      }
      img:hover {
        filter: brightness(0.85);
      }
    }
  }
  #toggle-button {
    display: none;
    margin: 3px;
  }

  .collapse {
    flex-grow: 2;
    #link-list {
      display: flex;
      list-style: none;
      justify-content: space-between;
      margin: 0 1em;
      li {
        padding: 22px 1em 5px 1em;
        a {
          font-family: montserrat-bold, sans-serif;
          color: #333;
          text-decoration: none;
          transition: 0.3s;
          &:hover {
            color: #000;
            border-bottom: 3px solid black;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    #toggle-button {
      display: block;
    }

    .collapse {
      display: none;
      &.nav-open {
        display: block;
        ul {
          flex-direction: column;
        }
      }
    }
  }
`

const StyledIcon = styled.div`
  .hamburger {
    padding: 18px 15px 12px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: #333;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:focus {
      outline: 1px solid #39b73f;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #333;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }
  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    display: block;
  }
  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--collapse .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse .hamburger-inner::before {
    transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(-90deg);
    transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = { isNavOpen: false }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState(state => ({
      isNavOpen: !state.isNavOpen,
    }))
  }

  render() {
    return (
      <StyledNav>
        <div className="brand-and-toggle">
          <a className="nav-brand" href="#">
            <img
              id="logo"
              src={this.props.brand.src}
              alt={this.props.brand.img}
            />
          </a>
          <StyledIcon id="toggle-button">
            <button
              onClick={this.toggleNav}
              className="hamburger hamburger--collapse"
              className={
                this.state.isNavOpen
                  ? 'hamburger hamburger--collapse is-active'
                  : 'hamburger hamburger--collapse'
              }
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </StyledIcon>
        </div>
        <div
          className={
            this.state.isNavOpen ? 'collapse nav-open' : 'collapse nav-closed'
          }
        >
          <ul id="link-list">
            {this.props.links.map(navitem => (
              <li key={navitem.title}>
                <a href={navitem.link}>{navitem.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </StyledNav>
    )
  }
}

export default Navbar
