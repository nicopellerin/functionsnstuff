const React = require("react")
const ReactDOM = require("react-dom")
// const Background = require("./src/components/background").default

require("typeface-lora")

const LazyBackground = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./src/components/background")), 1100)
  })
})

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    ReactDOM.unstable_createRoot(container, {
      hydrate: true,
      hydrationOptions: { onHydrated: callback },
    }).render(element)
  }
}

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <React.Suspense fallback={<div></div>}>
        <LazyBackground />
      </React.Suspense>
      <React.Fragment>{element}</React.Fragment>
    </>
  )
}
