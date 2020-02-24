import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const About = ()=> {

    const data = useStaticQuery(query);

    return(
        <Layout>
            <SEO title="About" />
            <Image fluid={data.fluid.childImageSharp.fluid} style={style} />
            <div className="about-page">
                <h1>Hi</h1>
                <p>
                    My name is Diego and I'm a developer living in the sunshine state (Florida), currently working on front end stuff at VeriTread. 
                    I'm passionate about building amazing and impactful products, regardless of the framework or technology stack. 
                </p>
                <p>    
                    I've worked with various JS frameworks such as React, Angular, Node, and jQuery. Java was the first programming language I learned in-depth,
                    so it will always have special place in my heart. I also enjoy learning about cloud infrastructure.
                </p>
                <p>
                    Other than that I like watching movies, drinking coffee, and eating good food. 
                </p>
            </div>
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
    margin: 'auto'
}


export default About