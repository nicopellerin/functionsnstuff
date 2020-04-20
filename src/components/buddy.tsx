import * as React from "react"
import { useRef, useEffect } from "react"
import lottie from "lottie-web"

const Buddy = ({ toggleBrowser }) => {
  const lottieRef = useRef(null)

  let anim

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "/anim.json",
    })

    return () => anim.destroy()
  })

  useEffect(() => {
    toggleBrowser ? anim.play() : anim.stop()
  }, [toggleBrowser])

  return <div style={{ width: 400, marginTop: 30 }} ref={lottieRef} />
}

export default Buddy
