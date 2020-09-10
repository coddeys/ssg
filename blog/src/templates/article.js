import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <Img fixed={data.strapiArticle.Cover.childImageSharp.fixed} />
    <p>{data.strapiArticle.description}</p>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      description
      Cover {
        childImageSharp {
          fixed(width: 500, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
