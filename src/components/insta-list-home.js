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
  }
`

export default function BlogListHome() {
  const {
    allInstaNode: { edges },
  } = useStaticQuery(instagramPostQuery)

  return (
    <section className="home-posts">
      <h2>
        Latest on <strong>Instagram</strong>{" "}
        <span class="icon -right">
          <RiArrowDownLine />
        </span>
      </h2>
      <div className="grids col-1 sm-2 lg-3">
        {edges.map(edge => {
          const { node } = edge
          return <InstaCard imgNode={node} key={`img ${node.id}`} />
        })}
      </div>
      <Link className="button" to="/blog">
        See more
        <span class="icon -right">
          <RiArrowRightSLine />
        </span>
      </Link>
    </section>
  )
}
