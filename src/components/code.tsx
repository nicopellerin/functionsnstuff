import * as React from "react"
import { useState } from "react"
import { preToCodeBlock } from "mdx-utils"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"
import styled from "styled-components"
import { FiCopy, FiCheckCircle } from "react-icons/fi"
import { AnimatePresence, motion } from "framer-motion"

const delay = (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration))

const Code = (props: any) => {
  const [copied, setCopied] = useState(false)

  const codeProps = preToCodeBlock(props)
  if (!codeProps) {
    return <pre {...props} />
  }
  const { codeString, language } = codeProps

  const handleCopyToClipboard = async () => {
    const clipboard = window.navigator.clipboard
    await clipboard.writeText(codeString)
    setCopied(true)
    await delay(3000)
    setCopied(false)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <pre className="language-jsx" style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
          <CopyWrapper onClick={handleCopyToClipboard}>
            <AnimatePresence>
              {copied ? (
                <CopyText
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ color: "lightgreen" }}
                >
                  <FiCheckCircle style={{ marginRight: 5 }} />
                  <span>Copied to clipboard</span>
                </CopyText>
              ) : (
                <CopyText
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CopyToClipboardIcon title="Copy to clipboard" />
                  <span>Copy</span>
                </CopyText>
              )}
            </AnimatePresence>
          </CopyWrapper>
        </Wrapper>
      )}
    </Highlight>
  )
}

export default Code

// Styles
const Wrapper = styled.div`
  position: relative;
`

const CopyWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 1rem;
  font-size: 1.4rem;
  cursor: pointer;
  opacity: 0.9;
`

const CopyText = styled(motion.div)`
  display: flex;
  align-items: center;
`

const CopyToClipboardIcon = styled(FiCopy)`
  font-size: 2.2rem;
  padding: 5px;
`
