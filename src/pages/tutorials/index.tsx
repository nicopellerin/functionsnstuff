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
    logoWebp: "/icons/react.webp",
    link: "/tutorials/react",
    width: 100,
  },
  {
    tech: "GraphQL",
    logo: "/icons/graphql.png",
    logoWebp: "/icons/graphql.webp",
    link: "/tutorials/graphql",
    width: 90,
  },
  {
    tech: "Golang",
    logo: "/icons/golang.png",
    logoWebp: "/icons/golang.webp",
    link: "/tutorials/golang",
    width: 160,
  },
  {
    tech: "Node.js",
    logo: "/icons/nodejs.png",
    logoWebp: "/icons/nodejs.webp",
    link: "/tutorials/nodejs",
    width: 120,
  },
  {
    tech: "Javascript",
    logo: "/icons/javascript.png",
    logoWebp: "/icons/javascript.webp",
    link: "/tutorials/javascript",
    width: 90,
  },
  {
    tech: "Typescript",
    logo: "/icons/typescript.png",
    logoWebp: "/icons/typescript.webp",
    link: "/tutorials/typescript",
    width: 90,
  },
  {
    tech: "Gatsby",
    slug: "gatsby",
    logo: "/icons/gatsby.png",
    logoWebp: "/icons/gatsby.webp",
    link: "/tutorials/gatsby",
    width: 100,
  },
  {
    tech: "Next.js",
    slug: "nextjs",
    logo: "/icons/nextjs.png",
    logoWebp: "/icons/nextjs.webp",
    link: "/tutorials/nextjs",
    width: 140,
  },
  {
    tech: "Rust",
    slug: "rust",
    logo: "/icons/rust.png",
    logoWebp: "/icons/rust.webp",
    link: "/tutorials/rust",
    width: 90,
  },
]

interface Props {
  data: any
}

enum Tech {
  react = "React",
  javascript = "Javascript",
  golang = "Golang",
  graphql = "Graphql",
  nodejs = "Node.js",
  typescript = "Typescript",
  gatsby = "Gatsby",
  "next.js" = "Next.js",
}

interface Post {
  node: { frontmatter: { tech: string } }
}

const TutorialsPage: React.FC<Props> = ({ data }) => {
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
  data.allMdx.edges.forEach(({ node }: Post) => {
    techCount[node.frontmatter.tech]++
  })

  return (
    <>
      <SEO title="Tutorials" />
      <PageHeader title="Tutorials" />
      <Layout>
        <TechCardList>
          {techList.map(({ tech, logo, logoWebp, link, width }) => (
            <TechCard
              key={tech}
              tech={tech}
              logo={logo}
              logoWebp={logoWebp}
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
