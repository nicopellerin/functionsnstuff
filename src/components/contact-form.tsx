import * as React from "react"
import { useState } from "react"
import styled from "styled-components"

import Spacer from "./spacer"

const ContactForm = () => {
  return (
    <Wrapper>
      <InputRow>
        <InputFieldWrapper>
          <Label>Name</Label>
          <InputField />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Label>Email</Label>
          <InputField />
        </InputFieldWrapper>
      </InputRow>

      <InputFieldWrapper>
        <Label>Subject</Label>
        <InputField />
      </InputFieldWrapper>

      <InputFieldWrapper>
        <Label>Message</Label>
        <TextareaField />
      </InputFieldWrapper>
      <Spacer margin="1rem 0" />
      <Button>Send</Button>
    </Wrapper>
  )
}

export default ContactForm

// Styles
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
`

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`

const InputFieldWrapper = styled.div`
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
`

const TextareaField = styled.textarea`
  border: 1px solid #222;
  color: ghostwhite;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  margin-bottom: 1.2rem;
  min-height: 20rem;
`

const Button = styled.button`
  padding: 0.8em 2em;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background: #ff88aa;
  cursor: pointer;
`
