import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/page-header"
import ContactForm from "../components/contact-form"
import Spacer from "../components/spacer"

const ContactPage = () => (
  <>
    <SEO title="Contact" />
    <PageHeader title="Contact" />
    <Layout>
      <DonutWrapper>
        <img
          src={`https://images.weserv.nl/?url=${encodeURI(
            "https://modest-jones-332c08.netlify.app/donut3.webp"
          )}&h=300`}
          alt="donut"
          width={150}
        />
      </DonutWrapper>
      <Text>
        Have an idea for a tutorial or would like to retain my services as a web
        developper?
      </Text>
      <Text>
        Drop me a message and we can talk!{" "}
        <EmojiHappy
          src={`https://images.weserv.nl/?url=${encodeURI(
            "https://modest-jones-332c08.netlify.app/happy.png"
          )}&h=40`}
          alt="happy"
        />
        -{" "}
        <span style={{ fontFamily: "cursive", fontSize: "2.2rem" }}>Nico</span>
      </Text>
      <Text></Text>
      <Spacer margin="4rem 0 6rem 0" />
      <ContactForm />
      <Spacer margin="4rem 0 8rem 0" />
    </Layout>
  </>
)

export default ContactPage

// Styles
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
  margin-top: -75px;
  margin-bottom: 75px;
`
