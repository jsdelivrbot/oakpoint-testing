import React from 'react'
import Navbar from './navbar2'

const Header = ({ siteTitle }) => (
  <div>
    <Navbar
      brand={{
        src:
          'https://cdn.rawgit.com/LucasLombardo/svg-hosting/master/Logov3.svg',
        alt: 'Oakpoint Digital Home',
        link: '#',
      }}
      links={[
        { title: 'What We Do', link: '#what-we-do' },
        { title: 'Contact Us', link: '#contact-us' },
      ]}
    />
  </div>
)

export default Header
