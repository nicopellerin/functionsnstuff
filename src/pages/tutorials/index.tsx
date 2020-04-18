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
    width: 100,
  },
  {
    tech: "GraphQL",
    logo: "/icons/graphql.png",
    link: "/tutorials/graphql",
    width: 90,
  },
  {
    tech: "Go",
    logo: "/icons/go.png",
    link: "/tutorials/go",
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

const TutorialsPage = () => (
  <>
    <SEO title="Tutorials" />
    <PageHeader title="Tutorials" />
    <Layout>
      <TechCardList>
        {techList.map(({ tech, logo, link, width }) => (
          <TechCard tech={tech} logo={logo} link={link} width={width} />
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
  align-items: center;
  grid-gap: 7rem 3rem;
  justify-items: center;
`
