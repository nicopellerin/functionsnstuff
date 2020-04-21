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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: -75,
          marginBottom: 75,
        }}
      >
        <img src="/donut3.png" alt="donut" width={150} />
      </div>
      <Text>
        Have an idea for a tutorial or would like to retain my services as a web
        developper?
      </Text>
      <Text>
        Drop me a message and we can talk!{" "}
        <EmojiHappy src="/happy.png" alt="happy" />
      </Text>
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
  width: 20px;
`
