import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              date
              subtitle
            }
            fields{
              slug
            }
            id
          }
        }
      }
    }
    `)

  return(
    <>
      <Layout>
        <SEO title="Blog" />
        <div className="content">
          {data.allMarkdownRemark.edges.map(edge=>{
            return(
              <article key={edge.node.id}>
                <Link to={`/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
                {edge.node.frontmatter.subtitle? <p>{edge.node.frontmatter.subtitle}</p>: null}
                <time>{edge.node.frontmatter.date}</time>
              </article>
            )
          })}
        </div>
      </Layout>
      <Footer />
    </>
  )
}

export default IndexPage
