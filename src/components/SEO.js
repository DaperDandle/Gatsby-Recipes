import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)
  const metaDesc = description || siteMetadata.description
  return (
    <Helmet
      title={`${title} | ${siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDesc }]}
      htmlAttributes={{ lang: "en" }}
    />
  )
}
export default SEO
