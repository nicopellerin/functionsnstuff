import * as React from "react"
import { useRef, useEffect } from "react"
import lottie from "lottie-web"

const BuddyHeader = ({ toggleBrowser }) => {
  const lottieRef = useRef(null)

  let anim

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/anim.json",
    })

    return () => anim.destroy()
  })

  // useEffect(() => {
  //   toggleBrowser ? anim.play() : anim.stop()
  // }, [toggleBrowser])

  return <div style={{ width: 400 }} ref={lottieRef} />
}

export default BuddyHeader
