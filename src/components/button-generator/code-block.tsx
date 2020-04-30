import * as React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/dracula"

const CodeBlock = ({ value }) => {
  return (
    <CodeOverlay>
      <CodeOverlayContainer>
        <Highlight
          {...defaultProps}
          code={value}
          language={"jsx"}
          theme={theme}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className="language-jsx2" style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CodeOverlayContainer>
    </CodeOverlay>
  )
}

export default CodeBlock

// Styles
const CodeOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CodeOverlayContainer = styled.div`
  font-family: "menlo", monospace;
  font-weight: 400;
  background: #0a0a0a;
  font-size: 1.3rem;
  line-height: 1.6em;
  border-radius: 10px;
  white-space: pre-wrap;
  padding: 0.5rem 0;
  color: var(--primaryColor);
  max-width: 100%;
`
