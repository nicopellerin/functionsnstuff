import * as React from "react"
import styled from "styled-components"

import wave from "../images/wavee.svg"
import Donut from "./donut"
import { motion } from "framer-motion"

const Footer = () => (
  <Wrapper>
    <Container>
      <NewsletterWrapper>
        <div>
          <Title>Newsletter</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            voluptatum asperiores fugit numquam enim eos quia? Obcaecati tempore
            esse eligendi, illum, magnam nostrum itaque nobis nihil labore
            accusamus atque aspernatur?
          </p>
          <Form>
            <Label htmlFor="email">Email</Label>
            <InputField id="email" name="email" type="email" />
            <Button>Subscribe</Button>
          </Form>
        </div>
        <motion.img
          src="/donut.png"
          alt="donut"
          width={280}
          style={{ marginTop: "4rem" }}
          animate={{ y: [10, -10], rotate: [0, 3] }}
          transition={{
            yoyo: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />
      </NewsletterWrapper>

      <FooterWrapper>
        &copy;{new Date().getFullYear()} helloworldnstuff. All Right Reserved.
      </FooterWrapper>
    </Container>
    <img
      src={wave}
      alt="wave"
      style={{
        position: "absolute",
        top: "-32%",
        width: "100%",
        pointerEvents: "none",
      }}
    />
  </Wrapper>
)

export default Footer

// Styles
const Wrapper = styled.div`
  position: relative;
  background: #001;
`

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 200;
`

const NewsletterWrapper = styled.div`
  min-height: 20rem;
  padding-top: 8rem;
  display: grid;
  grid-template-columns: 60rem 1fr;
  place-items: center;
  grid-gap: 5rem;
`

const Title = styled.h3`
  font-size: 3.6rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 1.4rem;
  margin-bottom: 5px;
`

const InputField = styled.input`
  border: none;
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  margin-bottom: 1.2rem;
  max-width: 80%;
`

const Button = styled.button`
  max-width: 80%;
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
  padding: 12rem 0 10rem 0;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--textColor);
`
