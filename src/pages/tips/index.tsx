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
    link: "/tips/react",
    width: 100,
  },
  {
    tech: "GraphQL",
    logo: "/icons/graphql.png",
    link: "/tips/graphql",
    width: 90,
  },
  {
    tech: "Golang",
    logo: "/icons/go.png",
    link: "/tips/golang",
    width: 160,
  },
  {
    tech: "NodeJS",
    logo: "/icons/nodejs.png",
    link: "/tips/nodejs",
    width: 120,
  },
  {
    tech: "Javascript",
    logo: "/icons/javascript.png",
    link: "/tips/javascript",
    width: 90,
  },
  {
    tech: "Typescript",
    logo: "/icons/typescript.svg",
    link: "/tips/typescript",
    width: 90,
  },
  {
    tech: "Gatsby",
    logo: "/icons/gatsby.png",
    link: "/tips/gatsby",
    width: 100,
  },
  {
    tech: "Next.js",
    logo: "/icons/nextjs.png",
    link: "/tips/nextjs",
    width: 140,
  },
]

const TipsPage = () => (
  <>
    <SEO title="Tips" />
    <PageHeader title="Tips" />
    <Layout>
      <TechCardList>
        {techList.map(({ tech, logo, link, width }) => (
          <TechCard tech={tech} logo={logo} link={link} width={width} />
        ))}
      </TechCardList>
      <Spacer />
    </Layout>
  </>
)

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
