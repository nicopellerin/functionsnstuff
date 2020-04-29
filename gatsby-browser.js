const React = require("react")
const Background = require("./src/components/background").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <>
      <Background {...props} />
      {element}
    </>
  )
}
