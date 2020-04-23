import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import TechCard from "../../components/tech-card"
import { graphql } from "gatsby"

const techList = [
  {
    tech: "React",
    slug: "react",
    logo: "/icons/react.png",
    link: "/tips/react",
    width: 100,
  },
  {
    tech: "Graphql",
    slug: "graphql",
    logo: "/icons/graphql.png",
    link: "/tips/graphql",
    width: 90,
  },
  {
    tech: "Golang",
    slug: "golang",
    logo: "/icons/go.png",
    link: "/tips/golang",
    width: 160,
  },
  {
    tech: "Node.js",
    slug: "nodejs",
    logo: "/icons/nodejs.png",
    link: "/tips/nodejs",
    width: 120,
  },
  {
    tech: "Javascript",
    slug: "javascript",
    logo: "/icons/javascript.png",
    link: "/tips/javascript",
    width: 90,
  },
  {
    tech: "Typescript",
    slug: "typescript",
    logo: "/icons/typescript.svg",
    link: "/tips/typescript",
    width: 90,
  },
  {
    tech: "Gatsby",
    slug: "gatsby",
    logo: "/icons/gatsby.png",
    link: "/tips/gatsby",
    width: 100,
  },
  {
    tech: "Next.js",
    slug: "nextjs",
    logo: "/icons/nextjs.png",
    link: "/tips/nextjs",
    width: 140,
  },
]

const TipsPage = ({ data }) => {
  const techCount = {
    react: 0,
    javascript: 0,
    golang: 0,
    graphql: 0,
    nodejs: 0,
    typescript: 0,
    gatsby: 0,
    nextjs: 0,
  }
  data.allMdx.edges.forEach(post => {
    techCount[post.node.frontmatter.tech]++
  })

  console.log(techCount)

  return (
    <>
      <SEO title="Tips" />
      <PageHeader title="Tips" />
      <Layout>
        <TechCardList>
          {techList.map(({ tech, logo, link, width, slug }) => (
            <TechCard
              key={tech}
              tech={tech}
              logo={logo}
              link={link}
              width={width}
              slug={slug}
              totalCount={techCount[slug]}
            />
          ))}
        </TechCardList>
        <Spacer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { type: { eq: "tips" } } }) {
      edges {
        node {
          frontmatter {
            tech
          }
        }
      }
    }
  }
`

export default TipsPage

// Styles
const TechCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  align-items: center;
  grid-gap: 7rem 3rem;
  justify-items: center;
`

const Spacer = styled.div`
  margin-bottom: 6rem;
`
