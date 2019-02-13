import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from "../components/article"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <StaticQuery
        query={graphql`
          {
            allContentfulArticle {
              edges {
                node {
                  id
                  title
                  text {
                    text
                  }
                  banner {
                    file {
                      url
                    }
                  }
                  createdAt
                }
              }
            }
          }
        `}
        render={({
          allContentfulArticle: {
            edges
          }
        }) => (
          edges.map(({ node }) => (
            <Article key={node.id} content={node}/>
          ))
        )}
      />
  </Layout>
)

export default IndexPage
