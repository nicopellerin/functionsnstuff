import * as React from "react"

interface Props {
  margin?: string
}

const Spacer: React.FC<Props> = ({ margin = "4rem 0" }) => (
  <div style={{ margin }} />
)

export default Spacer
