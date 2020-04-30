import * as React from "react"
import styled from "styled-components"
import { FiSend } from "react-icons/fi"
import { motion } from "framer-motion"
export const Button = () => (
  <ButtonStyled whileHover={{ y: -1 }} whileTap={{ y: 1 }}>
    Send
    <IconStyled />
  </ButtonStyled>
)
// Styles
const ButtonStyled = styled(motion.button)`
  color: #fff;
  background: #f44e3b;
  padding: 15px 35px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 400;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`
const IconStyled = styled(FiSend)`
  margin-left: 0.3em;
`
