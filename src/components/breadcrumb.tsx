import * as React from "react"
import { useLocation } from "@reach/router"
import { Link } from "gatsby"
import styled from "styled-components"

const Breadcrumb: React.FC = () => {
  const location = useLocation()

  const type = location.pathname.split("/")[1]
  let tech = location.pathname.split("/")[2]

  const Sep = () => {
    return <SepStyled>/</SepStyled>
  }

  tech = tech === "nodejs" ? "Node.js" : tech
  tech = tech === "nextjs" ? "Next.js" : tech

  return (
    <div>
      <Wrapper>
        <Link to={`/${type}`}>
          <Type>{type}</Type>
        </Link>
        <Sep />
        <Link to={`/${type}/${tech}`} aria-label={`${tech} tutorials`}>
          <Tech>{tech}</Tech>
        </Link>
      </Wrapper>
    </div>
  )
}

export default Breadcrumb

// Styles
const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Type = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`

const Tech = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: capitalize;
  background: none;
  border: none;
  color: var(--textColor);
  padding: 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const SepStyled = styled.span`
  font-size: 1.6rem;
  margin: 0 1rem;
  color: var(--primaryColor);
`
