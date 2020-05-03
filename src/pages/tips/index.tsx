import React from "react"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { FaDice } from "react-icons/fa"
import { graphql, navigate } from "gatsby"
import { motion } from "framer-motion"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PageHeader from "../../components/page-header"
import TechCard from "../../components/tech-card"
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
    slug: "react",
    logo: "/icons/react.png",
    component: <ReactLogo />,
    link: "/tips/react",
    width: 100,
  },
  {
    tech: "GraphQL",
    slug: "graphql",
    logo: "/icons/graphql.png",
    link: "/tips/graphql",
    width: 90,
    component: <GraphqlLogo />,
  },
  {
    tech: "Golang",
    slug: "golang",
    logo: "/icons/golang.png",
    link: "/tips/golang",
    width: 160,
    component: <GolangLogo />,
  },
  {
    tech: "Node.js",
    slug: "nodejs",
    logo: "/icons/nodejs.png",
    link: "/tips/nodejs",
    width: 120,
    component: <NodejsLogo />,
  },
  {
    tech: "Javascript",
    slug: "javascript",
    logo: "/icons/javascript.png",
    link: "/tips/javascript",
    width: 90,
    component: <JavascriptLogo />,
  },
  {
    tech: "Typescript",
    slug: "typescript",
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

interface Tip {
  node: { frontmatter: { tech: string } }
}

const TipsPage: React.FC<Props> = ({ data }) => {
  const [randomTip, setRandomTip] = useState(false)

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
  data.allMdx.edges.forEach(({ node }: Tip) => {
    techCount[node.frontmatter.tech]++
  })

  useEffect(() => {
    let id: number

    const random = Math.floor(Math.random() * 8)
    if (randomTip) {
      console.log(random)
      id = setTimeout(() => {
        navigate(
          `/tips/${data.allMdx.edges[random].node.frontmatter.tech}/${data.allMdx.edges[random].node.frontmatter.slug}`
        )
      }, 2500)
    }
    ;() => clearTimeout(id)
  }, [randomTip])

  return (
    <>
      <SEO title="Tips" />
      <PageHeader title="Tips" randomTip={randomTip} />
      <Layout>
        <RandomButtonWrapper initial={{ x: "-50%" }}>
          <RandomButton
            onClick={() => setRandomTip(true)}
            whileHover={{ y: -1 }}
            whileTap={{ y: 1 }}
          >
            {randomTip ? (
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ yoyo: Infinity }}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <FaDice />
              </motion.div>
            ) : (
              <>
                Random tip <FaDice style={{ marginLeft: 7 }} />
              </>
            )}
          </RandomButton>
        </RandomButtonWrapper>
        <TechCardList>
          {techList.map(({ tech, logo, link, width, slug, component }) => (
            <TechCard
              key={tech}
              tech={tech}
              logo={logo}
              link={link}
              totalCount={techCount[slug]}
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
    allMdx(filter: { frontmatter: { type: { eq: "tips" } } }) {
      edges {
        node {
          frontmatter {
            tech
            slug
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

const RandomButtonWrapper = styled(motion.div)`
  position: absolute;
  top: -11px;
  left: 50%;
  z-index: 2000;

  @media (max-width: 768px) {
    display: none;
  }
`

const RandomButton = styled(motion.button)`
  border: none;
  padding: 0.8em 1.4em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 500;
  background: var(--pink);
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 150px;
  height: 44px;
  outline: none;
  will-change: transform;
`
