import * as React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share"
import styled from "styled-components"

const Share = () => {
  const url = typeof window !== "undefined" ? window.location.href : null

  return (
    <Wrapper>
      <FacebookShareButton url={url}>
        <FacebookIcon
          style={{
            borderRadius: "50%",
            width: 36,
            height: 36,
            marginRight: "1.5rem",
          }}
        />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon
          style={{
            borderRadius: "50%",
            width: 36,
            height: 36,
            marginRight: "1.5rem",
          }}
        />
      </TwitterShareButton>
      <EmailShareButton url={url}>
        <EmailIcon style={{ borderRadius: "50%", width: 36, height: 36 }} />
      </EmailShareButton>
    </Wrapper>
  )
}

export default Share

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  @media (max-width: 1024px) {
    margin-top: 6rem;
    margin-bottom: 4rem;
  }
`
