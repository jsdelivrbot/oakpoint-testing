import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby' // eslint-disable-line

import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = (
  { children, data } // eslint-disable-line
) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(
      data // eslint-disable-line
    ) => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Oakpoint Digital is a web development agency located in North Andover, MA.',
            },
            {
              name: 'keywords',
              content:
                'web development, web design, seo, north andover, boston, massachusetts',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
