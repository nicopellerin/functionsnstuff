import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { motion, AnimateSharedLayout } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import Card from "./card"

const techItems = [
  {
    title: "React",
    link: "/tutorials/react",
  },
  {
    title: "Node.js",
    link: "/tutorials/nodejs",
  },
  {
    title: "Javascript",
    link: "/tutorials/javascript",
  },
  {
    title: "Typescript",
    link: "/tutorials/typescript",
  },
  {
    title: "Gatsby",
    link: "/tutorials/gatsby",
  },
  {
    title: "Next.js",
    link: "/tutorials/nextjs",
  },
  {
    title: "GraphQL",
    link: "/tutorials/graphql",
  },
  {
    title: "Golang",
    link: "/tutorials/golang",
  },
]

const Main = () => {
  const isMobile =
    typeof window !== "undefined"
      ? /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
      : null

  const [show, setShow] = useState(null)

  const { tutorial, tip } = useStaticQuery(graphql`
    query latestTutorials {
      tutorial: allMdx(
        filter: { frontmatter: { type: { eq: "tutorials" } } } # sort: { order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              cover
              slug
            }
          }
        }
      }
      tip: allMdx(
        filter: { frontmatter: { type: { eq: "tips" } } } # sort: { order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              cover
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <div>
        <Content>
          <Title>
            Latest tutorial{" "}
            <svg
              style={{ marginLeft: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              width="10.154"
              height="18"
            >
              <path
                d="M 0.443 9.711 C 0.01 9.279 0.01 8.578 0.443 8.146 L 8.265 0.324 C 8.697 -0.108 9.397 -0.108 9.829 0.324 L 9.829 0.324 C 10.262 0.756 10.262 1.456 9.829 1.888 L 2.007 9.711 C 1.575 10.143 0.875 10.143 0.443 9.711 Z M 0.324 8.289 C 0.756 7.857 1.456 7.857 1.889 8.289 L 9.711 16.111 C 10.143 16.544 10.143 17.244 9.711 17.676 L 9.711 17.676 C 9.279 18.108 8.579 18.108 8.147 17.676 L 0.324 9.854 C -0.108 9.422 -0.108 8.721 0.324 8.289 Z"
                transform="rotate(180 5.077 9)"
                fill="rgba(255, 137, 170, 1.00)"
              ></path>
            </svg>
          </Title>
          <Card
            tech={tutorial.edges[0].node.frontmatter.tech}
            title={tutorial.edges[0].node.frontmatter.title}
            image={tutorial.edges[0].node.frontmatter.cover}
            link={`/tutorials/${tutorial.edges[0].node.frontmatter.tech}/${tutorial.edges[0].node.frontmatter.slug}`}
          />
        </Content>
        <Content>
          <Title>
            Latest tip{" "}
            <svg
              style={{ marginLeft: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              width="10.154"
              height="18"
            >
              <path
                d="M 0.443 9.711 C 0.01 9.279 0.01 8.578 0.443 8.146 L 8.265 0.324 C 8.697 -0.108 9.397 -0.108 9.829 0.324 L 9.829 0.324 C 10.262 0.756 10.262 1.456 9.829 1.888 L 2.007 9.711 C 1.575 10.143 0.875 10.143 0.443 9.711 Z M 0.324 8.289 C 0.756 7.857 1.456 7.857 1.889 8.289 L 9.711 16.111 C 10.143 16.544 10.143 17.244 9.711 17.676 L 9.711 17.676 C 9.279 18.108 8.579 18.108 8.147 17.676 L 0.324 9.854 C -0.108 9.422 -0.108 8.721 0.324 8.289 Z"
                transform="rotate(180 5.077 9)"
                fill="rgba(255, 137, 170, 1.00)"
              ></path>
            </svg>
          </Title>
          <Card
            tech={tip.edges[0].node.frontmatter.tech}
            title={tip.edges[0].node.frontmatter.title}
            image={tip.edges[0].node.frontmatter.cover}
            link={`/tips/${tip.edges[0].node.frontmatter.tech}/${tip.edges[0].node.frontmatter.slug}`}
          />
        </Content>
      </div>

      <Tech>
        <TechTitle>Technology</TechTitle>
        <TechList onMouseLeave={() => setShow(null)}>
          <AnimateSharedLayout>
            {techItems.map(({ title, link }, i) => (
              <TechListItem key={title} onMouseEnter={() => setShow(i)}>
                <Link to={link}>{title}</Link>
                {show === i && (
                  <motion.svg
                    style={{
                      position: "absolute",
                      left: -15,
                      top: "28%",
                      transform: "translateY(-50%)",
                    }}
                    layoutId="techItem"
                    xmlns="http://www.w3.org/2000/svg"
                    width="5.641"
                    height="10"
                  >
                    <path
                      d="M 0.246 5.395 C 0.006 5.155 0.006 4.766 0.246 4.526 L 4.592 0.18 C 4.832 -0.06 5.221 -0.06 5.461 0.18 L 5.461 0.18 C 5.701 0.42 5.701 0.809 5.461 1.049 L 1.115 5.395 C 0.875 5.635 0.486 5.635 0.246 5.395 Z M 0.18 4.605 C 0.42 4.365 0.809 4.365 1.049 4.605 L 5.395 8.951 C 5.635 9.191 5.635 9.58 5.395 9.82 L 5.395 9.82 C 5.155 10.06 4.766 10.06 4.526 9.82 L 0.18 5.474 C -0.06 5.234 -0.06 4.845 0.18 4.605 Z"
                      transform="rotate(180 2.82 5)"
                      fill="rgba(255, 137, 170, 1.00)"
                    ></path>
                  </motion.svg>
                )}
              </TechListItem>
            ))}
          </AnimateSharedLayout>
        </TechList>
      </Tech>
    </Wrapper>
  )
}

export default Main

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10rem;
  max-width: 80rem;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-gap: 2rem;
    grid-template-columns: 4fr 1fr;
    justify-items: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    justify-items: center;
  }
`

const Content = styled.div`
  margin-bottom: 6rem;
  max-width: 80%;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`

const Title = styled.h3`
  font-size: 3rem;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 4rem;
`

const Tech = styled.aside`
  justify-self: end;
  position: sticky;
  top: 0;

  @media (max-width: 1024px) {
    justify-self: center;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const TechTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: var(--systemFont);
  color: var(--primaryColor);
`

const TechList = styled.ul`
  list-style: none;
  padding: 0;
`

const TechListItem = styled.li`
  font-family: "Lora", serif;
  font-size: 1.6rem;
  font-weight: 500;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 1.8rem;
  }
`
