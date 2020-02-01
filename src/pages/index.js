import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"
export default ({ data }) => {
    const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        
        <SEO  />
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
           
              <span
                css={css`
                  color: #bbb;
                `}
              >
           
              </span>
            </h3>

            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
  
     
    </Layout>
  )
}

export const query = graphql`
  query {
    markdownRemark {
        html
      
      }
 
  }
`
