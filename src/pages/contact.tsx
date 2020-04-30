import React from "react"
import styled from "styled-components"
import { useMedia } from "react-use-media"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import ContactForm from "../components/contact-form"
import Spacer from "../components/spacer"

const ContactPage = () => {
  const isDesktop = useMedia({
    minWidth: 500,
  })

  return (
    <>
      <SEO title="Contact" />
      <PageHeader title="Contact" />
      <Layout>
        {isDesktop ? (
          <DonutWrapper>
            <img
              src={`https://images.weserv.nl/?url=${encodeURI(
                "https://functionsnstuff.netlify.app/donut3.webp"
              )}&h=300`}
              alt="donut"
              width={150}
            />
          </DonutWrapper>
        ) : null}
        <TextWrapper>
          <Text>
            Have an idea for a tutorial or would like to retain my services as a
            web developper?
          </Text>
          <Text>
            Drop me a message and we can talk!{" "}
            <>
              {isDesktop ? (
                <>
                  <EmojiHappy
                    src={`https://images.weserv.nl/?url=${encodeURI(
                      "https://functionsnstuff.netlify.app/happy.png"
                    )}&h=40`}
                    alt="happy"
                  />
                  {"-"}
                  <span style={{ fontFamily: "cursive", fontSize: "2.2rem" }}>
                    Nico
                  </span>
                </>
              ) : (
                <EmojiHappy
                  src={`https://images.weserv.nl/?url=${encodeURI(
                    "https://functionsnstuff.netlify.app/happy.png"
                  )}&h=40`}
                  alt="happy"
                />
              )}
            </>
          </Text>
        </TextWrapper>
        <Spacer margin="4rem 0 6rem 0" />
        <ContactForm />
        <Spacer margin="4rem 0 8rem 0" />
      </Layout>
    </>
  )
}

export default ContactPage

// Styles
const TextWrapper = styled.div``

const Text = styled.h4`
  margin-bottom: 2rem;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
`

const EmojiHappy = styled.img`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 20px;
`

const DonutWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 75px;
  position: relative;
  z-index: 2000;
`
