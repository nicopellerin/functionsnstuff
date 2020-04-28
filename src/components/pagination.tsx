import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Pagination = ({ prev, next }) => {
  return (
    <Wrapper>
      <Prev disabled={!prev}>
        <LinkStyled
          to={
            prev?.frontmatter?.slug
              ? `/tips/${prev.frontmatter.tech}/${prev.frontmatter.slug}`
              : null
          }
        >
          {prev && (
            <svg
              style={{ marginRight: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              width="10.154"
              height="18"
            >
              <path
                d="M 0.443 9.711 C 0.01 9.279 0.01 8.578 0.443 8.146 L 8.265 0.324 C 8.697 -0.108 9.397 -0.108 9.829 0.324 L 9.829 0.324 C 10.262 0.756 10.262 1.456 9.829 1.888 L 2.007 9.711 C 1.575 10.143 0.875 10.143 0.443 9.711 Z M 0.324 8.289 C 0.756 7.857 1.456 7.857 1.889 8.289 L 9.711 16.111 C 10.143 16.544 10.143 17.244 9.711 17.676 L 9.711 17.676 C 9.279 18.108 8.579 18.108 8.147 17.676 L 0.324 9.854 C -0.108 9.422 -0.108 8.721 0.324 8.289 Z"
                transform="rotate(0 5.077 9)"
                fill="var(--menuColor)"
              ></path>
            </svg>
          )}
          <span>{prev?.frontmatter?.title}</span>
        </LinkStyled>
      </Prev>
      <Next>
        <LinkStyled
          to={
            next?.frontmatter?.slug
              ? `/tips/${next.frontmatter.tech}/${next.frontmatter.slug}`
              : null
          }
        >
          <span>{next?.frontmatter?.title}</span>
          {next && (
            <svg
              style={{ marginLeft: 10 }}
              xmlns="http://www.w3.org/2000/svg"
              width="10.154"
              height="18"
            >
              <path
                d="M 0.443 9.711 C 0.01 9.279 0.01 8.578 0.443 8.146 L 8.265 0.324 C 8.697 -0.108 9.397 -0.108 9.829 0.324 L 9.829 0.324 C 10.262 0.756 10.262 1.456 9.829 1.888 L 2.007 9.711 C 1.575 10.143 0.875 10.143 0.443 9.711 Z M 0.324 8.289 C 0.756 7.857 1.456 7.857 1.889 8.289 L 9.711 16.111 C 10.143 16.544 10.143 17.244 9.711 17.676 L 9.711 17.676 C 9.279 18.108 8.579 18.108 8.147 17.676 L 0.324 9.854 C -0.108 9.422 -0.108 8.721 0.324 8.289 Z"
                transform="rotate(180 5.077 9)"
                fill="var(--menuColor)"
              ></path>
            </svg>
          )}
        </LinkStyled>
      </Next>
    </Wrapper>
  )
}

export default Pagination

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 8rem 0 4rem 0;

  @media (max-width: 500px) {
    padding: 2rem 0 4rem 0;
  }
`

const Prev = styled.div`
  pointer-events: ${(props: { disabled: boolean }) =>
    props.disabled ? "none" : "all"};
  opacity: ${(props: { disabled: boolean }) => (props.disabled ? 0.2 : 1)};
  pointer-events: ${(props: { disabled: boolean }) =>
    props.disabled ? "none" : "all"};
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`

const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--menuColor);

  &:hover {
    text-decoration: underline;
  }
`

const Next = styled.div`
  justify-self: end;
  pointer-events: ${(props: { disabled: boolean }) =>
    props.disabled ? "none" : "all"};
  opacity: ${(props: { disabled: boolean }) => (props.disabled ? 0.2 : 1)};
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: var(--menuColor);
`
