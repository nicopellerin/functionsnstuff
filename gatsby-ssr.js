const React = require("react")
const Background = require("./src/components/background").default

require("typeface-lora")

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <Background />
      {element}
    </>
  )
}
