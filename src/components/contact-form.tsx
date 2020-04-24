import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import { FiSend, FiAlertTriangle } from "react-icons/fi"
import axios from "axios"

import Spacer from "./spacer"

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const [errors, setErrors] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()

    if (name === "" || email === "" || subject === "" || message === "") {
      setErrors("Please fill out all fields")
      return
    }

    setIsSending(true)

    const body = {
      name,
      email,
      subject,
      message,
    }

    try {
      await axios.post("/.netlify/functions/contact-form", body)
    } catch (err) {
    } finally {
      setIsSending(false)
    }
  }

  useEffect(() => {
    if (errors) {
      setTimeout(() => setErrors(""), 3000)
    }
  }, [errors])

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputRow>
        <InputFieldWrapper>
          <Label>Name</Label>
          <InputField
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          <Label>Email</Label>
          <InputField
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </InputFieldWrapper>
      </InputRow>

      <InputFieldWrapper>
        <Label>Subject</Label>
        <InputField
          name="subject"
          value={subject}
          onChange={e => setSubject(e.target.value)}
        />
      </InputFieldWrapper>

      <InputFieldWrapper>
        <Label>Message</Label>
        <TextareaField
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </InputFieldWrapper>
      <Spacer margin="1rem 0" />
      <Button>
        {isSending ? (
          <>Sending</>
        ) : (
          <>
            Send <FiSend style={{ marginLeft: 5 }} />
          </>
        )}
      </Button>
      <AnimatePresence>
        {errors && (
          <ErrMsg
            initial={{ opacity: 0, x: "-50%", y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <FiAlertTriangle style={{ marginRight: 7 }} />
            {errors}
          </ErrMsg>
        )}
      </AnimatePresence>
    </FormWrapper>
  )
}

export default ContactForm

// Styles
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
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
  border: 1px solid #111;
  color: ghostwhite;
  background: #112;
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  margin-bottom: 1.6rem;
`

const TextareaField = styled.textarea`
  border: 1px solid #111;
  color: ghostwhite;
  background: #112;
  padding: 0.8em 0.5em;
  border-radius: 5px;
  font-size: 1.6rem;
  font-family: inherit;
  margin-bottom: 1.2rem;
  min-height: 20rem;
  resize: none;
`

const Button = styled.button`
  padding: 0.8em 2em;
  font-size: 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  background: #ff88aa;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrMsg = styled(motion.span)`
  position: absolute;
  left: 50%;
  bottom: -5rem;
  color: red;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`
