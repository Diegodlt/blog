import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export const query = graphql`
    query($slug: String!) {
        markdownRemark (fields: {slug: { eq: $slug }}){
            frontmatter {
                title
                date
            }
            html
        }
    }
`

const Blog = (props)=> {
    return(
        <>
            <Layout>
                <SEO title={props.data.markdownRemark.frontmatter.title} />
                <div className="post-title">
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <time>{props.data.markdownRemark.frontmatter.date}</time>
                </div>
                <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} className="post-body">
                </div>
            </Layout>
            <Footer styles={['no-nav-footer']}/>
        </>
    )
}

export default Blog