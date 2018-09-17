import React from 'react'
import Navbar from './navbar'

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
        { title: 'What We Do', link: '#' },
        { title: 'Our Work', link: '#' },
        { title: 'Contact Us', link: '#' },
      ]}
    />
  </div>
)

export default Header
