import React from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import TechCard from "../../components/tech-card"

const techList = [
  {
    tech: "React",
    logo: "/icons/react.png",
    link: "/tutorials/react",
  },
  {
    tech: "GraphQL",
    logo: "/icons/graphql.png",
    link: "/tutorials/graphql",
  },
  {
    tech: "Go",
    logo: "/icons/go.png",
    link: "/tutorials/go",
  },
  {
    tech: "NodeJS",
    logo: "/icons/nodejs.png",
    link: "/tutorials/nodejs",
  },
  {
    tech: "Javascript",
    logo: "/icons/js.png",
    link: "/tutorials/javascript",
  },
  {
    tech: "Typescript",
    logo: "/icons/typescript.svg",
    link: "/tutorials/typescript",
  },
  {
    tech: "Gatsby",
    logo: "/icons/gatsby.png",
    link: "/tutorials/gatsby",
  },
  {
    tech: "Next.js",
    logo: "/icons/nextjs.png",
    link: "/tutorials/nextjs",
  },
]

const TutorialsPage = () => (
  <>
    <SEO title="Page two" />
    <PageHeader title="Tutorials" />
    <Layout>
      <TechCardList>
        {techList.map(({ tech, logo, link }) => (
          <TechCard tech={tech} logo={logo} link={link} />
        ))}
      </TechCardList>
    </Layout>
  </>
)

export default TutorialsPage

// Styles
const TechCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5rem 2rem;
  justify-items: center;
`
