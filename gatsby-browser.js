const React = require("react")
const Background = require("./src/components/background").default

require("typeface-lora")

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <Background />
      <React.Fragment>{element}</React.Fragment>
    </>
  )
}
