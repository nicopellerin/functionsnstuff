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
    logo: "/icons/react.png",
    link: "/tutorials/react",
    width: 100,
  },
  {
    tech: "Graphql",
    logo: "/icons/graphql.png",
    link: "/tutorials/graphql",
    width: 90,
  },
  {
    tech: "Golang",
    logo: "/icons/go.png",
    link: "/tutorials/golang",
    width: 160,
  },
  {
    tech: "NodeJS",
    logo: "/icons/nodejs.png",
    link: "/tutorials/nodejs",
    width: 120,
  },
  {
    tech: "Javascript",
    logo: "/icons/javascript.png",
    link: "/tutorials/javascript",
    width: 90,
  },
  {
    tech: "Typescript",
    logo: "/icons/typescript.svg",
    link: "/tutorials/typescript",
    width: 90,
  },
  {
    tech: "Gatsby",
    logo: "/icons/gatsby.png",
    link: "/tutorials/gatsby",
    width: 100,
  },
  {
    tech: "Next.js",
    logo: "/icons/nextjs.png",
    link: "/tutorials/nextjs",
    width: 140,
  },
]

const TutorialsPage = ({ data }) => {
  const techCount = {
    react: 0,
    javascript: 0,
    golang: 0,
    graphql: 0,
    nodejs: 0,
    typescript: 0,
    gatsby: 0,
    "next.js": 0,
  }
  data.allMdx.edges.forEach(post => {
    techCount[post.node.frontmatter.tech]++
  })

  return (
    <>
      <SEO title="Tutorials" />
      <PageHeader title="Tutorials" />
      <Layout>
        <TechCardList>
          {techList.map(({ tech, logo, link, width }) => (
            <TechCard
              tech={tech}
              logo={logo}
              link={link}
              width={width}
              totalCount={techCount[tech.toLowerCase()]}
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
    allMdx(filter: { frontmatter: { type: { eq: "tutorials" } } }) {
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

export default TutorialsPage

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
