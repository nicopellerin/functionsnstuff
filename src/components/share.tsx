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
import { FiShare2 } from "react-icons/fi"

const Share = () => {
  const isMobile = (width = 1024) => {
    let mql =
      typeof window !== "undefined" &&
      window.matchMedia(`(max-width: ${width}px)`)
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        typeof window !== "undefined" && window.navigator.userAgent
      ) &&
      mql.matches
    ) {
      return true
    }
    return false
  }

  const url = typeof window !== "undefined" ? window.location.href : ""

  const mobileNativeShare = () => {
    const navigatorShare =
      typeof window !== "undefined" && window.navigator.share

    if (navigatorShare) {
      navigatorShare
        .share({
          title: document.title,
          text: document
            .querySelector('meta[name="description"]')
            ?.getAttribute("content"),
          url,
        })
        .then(() => console.log("Shared"))
        .catch(err => console.log("Error sharing", err))
    }
  }

  return (
    <Wrapper>
      {isMobile() ? (
        <ButtonIcon style={{ marginRight: "2rem" }} onClick={mobileNativeShare}>
          <FiShare2 color="#f4f4f4" size={30} />
        </ButtonIcon>
      ) : null}
      <FacebookShareButton url={url}>
        <FacebookIcon
          style={{
            borderRadius: "50%",
            width: 36,
            height: 36,
            marginRight: "2rem",
          }}
        />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <TwitterIcon
          style={{
            borderRadius: "50%",
            width: 36,
            height: 36,
            marginRight: "2rem",
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

  @media (max-width: 500px) {
    margin-top: 6rem;
    margin-bottom: 4rem;
  }
`

const ButtonIcon = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  padding: 0.2rem;

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }
`
