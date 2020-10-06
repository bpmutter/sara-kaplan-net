import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"
import PostCard from "./post-card"

const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 540, maxHeight: 360, quality: 80) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`

export default function BlogListHome() {
  const data = useStaticQuery(query)
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostCard key={edge.node.id} data={edge.node} />)
  return (
    <div>
      <section className="home-posts">
        <h2>
          Latest on <strong>Instagram</strong>{" "}
          <span class="icon -right">
            <RiArrowDownLine />
          </span>
        </h2>
        <div className="grids col-1 sm-2 lg-3">{posts}</div>
        <Link className="button" to="/blog">
          See more
          <span class="icon -right">
            <RiArrowRightSLine />
          </span>
        </Link>
      </section>
    </div>
  )
}
