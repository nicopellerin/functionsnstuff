const React = require("react")
const Background = require("./src/components/background").default

require("typeface-lora")

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <React.Suspense fallback={null}>
        <Background />
      </React.Suspense>
      <React.Fragment>{element}</React.Fragment>
    </>
  )
}
