import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ()=> {

    const data = useStaticQuery(query);
    console.log("ABOUT", data )

    return(
        <Layout>
            <SEO title="About" />
            <Image fluid={data.fluid.childImageSharp.fluid} style={style} />
            this is test to seee how the content is going to wrap around the image. I'm just going to write random
            stuff until there is enough writing for me to see how the text is going to look next to the image.
        </Layout>
    )
}

const query = graphql`
{
    fluid:file(relativePath: { eq:"images/about.JPG"}){
        childImageSharp {
            fluid(jpegQuality: 100){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`

const style = {
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 4px 1px',
    borderRadius: '20px',
    width: '400px'
}


export default About