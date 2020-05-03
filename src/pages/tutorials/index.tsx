import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import TechCard from "../../components/tech-card"
import { graphql } from "gatsby"
import {
  ReactLogo,
  GolangLogo,
  GraphqlLogo,
  NodejsLogo,
  JavascriptLogo,
  TypescriptLogo,
  GatsbyLogo,
  NextjsLogo,
} from "../../components/logos"

const techList = [
  {
    tech: "React",
    logo: "/icons/react.png",
    component: <ReactLogo />,
    link: "/tips/react",
    width: 100,
  },
  {
    tech: "GraphQL",
    logo: "/icons/graphql.png",
    link: "/tips/graphql",
    width: 90,
    component: <GraphqlLogo />,
  },
  {
    tech: "Golang",
    logo: "/icons/golang.png",
    link: "/tips/golang",
    width: 160,
    component: <GolangLogo />,
  },
  {
    tech: "Node.js",
    logo: "/icons/nodejs.png",
    link: "/tips/nodejs",
    width: 120,
    component: <NodejsLogo />,
  },
  {
    tech: "Javascript",
    logo: "/icons/javascript.png",
    link: "/tips/javascript",
    width: 90,
    component: <JavascriptLogo />,
  },
  {
    tech: "Typescript",
    logo: "/icons/typescript.svg",
    link: "/tips/typescript",
    width: 90,
    component: <TypescriptLogo />,
  },
  {
    tech: "Gatsby",
    slug: "gatsby",
    logo: "/icons/gatsby.png",
    link: "/tips/gatsby",
    width: 100,
    component: <GatsbyLogo />,
  },
  {
    tech: "Next.js",
    slug: "nextjs",
    logo: "/icons/nextjs.png",
    link: "/tips/nextjs",
    width: 140,
    component: <NextjsLogo />,
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
          {techList.map(({ tech, logo, link, width, component }) => (
            <TechCard
              key={tech}
              tech={tech}
              logo={logo}
              link={link}
              width={width}
              totalCount={techCount[tech.toLowerCase()]}
              component={component}
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
