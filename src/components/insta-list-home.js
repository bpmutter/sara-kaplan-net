import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"
import InstaCard from "./insta-card"

const instagramPostQuery = graphql`
  query {
    allInstaNode {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          localFile {
            childImageSharp {
              fixed(width: 150, height: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        instagramUsername
      }
    }
  }
`

export default function BlogListHome() {
  const data = useStaticQuery(instagramPostQuery)
  const {
    allInstaNode: { edges },
  } = data
  const {
    site: {
      siteMetadata: { instagramUsername },
    },
  } = data
  const nodes = edges.map(edge => edge.node)
  return (
    <section className="home-posts">
      <h2>
        Latest on <strong>Instagram</strong>{" "}
        <span class="icon -right">
          <RiArrowDownLine />
        </span>
      </h2>
      <div className="grids col-1 sm-2 lg-3">
        {nodes.map(node => (
          <InstaCard imgNode={node} key={`img ${node.id}`} />
        ))}
      </div>
      <Link
        className="button"
        to={`https://www.instagram.com/${instagramUsername}/`}
        target="_blank"
      >
        See more
        <span class="icon -right">
          <RiArrowRightSLine />
        </span>
      </Link>
    </section>
  )
}
