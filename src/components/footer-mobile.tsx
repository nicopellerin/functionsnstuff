import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import addToMailchimp from "gatsby-plugin-mailchimp"

import wave from "../images/wavee.svg"

const FooterMobile = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await addToMailchimp(email, null, null)

    if (res.result === "success") {
      setEmail("")
      setStatus(`<h4>All good!</h4><h4>Thanks for subscribing!</h4>`)
    }
    if (res.result === "error") {
      setEmail("")
      setStatus(`<h4>Oups, something went wrong</h4><h4>Please try again</h4>`)
      setTimeout(() => setStatus(""), 2000)
    }
  }

  return (
    <Wrapper>
      <Container>
        <NewsletterWrapper>
          <div>
            <Title>Newsletter</Title>
            {status ? (
              <div dangerouslySetInnerHTML={{ __html: status }} />
            ) : (
              <>
                <Text>
                  Subscribe to the{" "}
                  <span style={{ color: "var(--primaryColor)" }}>
                    functionsnstuff
                  </span>{" "}
                  newsletter to get access to the newest tutorials and tips. No
                  spam ever.
                </Text>
                <Form onSubmit={handleSubmit}>
                  <Label htmlFor="email">Email</Label>
                  <InputField
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <Button>Subscribe</Button>
                </Form>
              </>
            )}
          </div>
        </NewsletterWrapper>
        <FooterWrapper>
          &copy;{new Date().getFullYear()} functionsnstuff. All Right Reserved.
        </FooterWrapper>
      </Container>
      <Wave src={wave} alt="wave" />
    </Wrapper>
  )
}

export default FooterMobile

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
`

const Container = styled.div`
  padding: 0 2rem;
  max-width: 60rem;
  margin: 0 auto;
  position: relative;
  z-index: 200;
`

const NewsletterWrapper = styled.div`
  min-height: 20rem;
  padding-top: 8rem;

  @media (max-width: 1440px) {
    padding-top: 6rem;
  }

  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`

const Title = styled.h3`
  font-size: 3.6rem;
  margin-bottom: 2rem;
`

const Text = styled.p`
  margin-bottom: 3rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: var(--primaryColor);
`

const InputField = styled.input`
  border: 1px solid #222;
  color: ghostwhite;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  margin-bottom: 1.6rem;
  width: 100%;
`

const Button = styled.button`
  width: 100%;
  padding: 0.8em 2em;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background: #ff88aa;
  cursor: pointer;
`

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 8rem 0 6rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--textColor);
`

const Wave = styled.img`
  position: absolute;
  top: -75px;
  width: 100%;
  pointer-events: none;

  @media (max-width: 1024px) {
    top: -100px;
  }

  @media (max-width: 500px) {
    top: -75px;
  }
`
