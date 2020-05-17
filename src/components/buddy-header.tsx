import * as React from "react"
import { useRef, useEffect } from "react"
import lottie from "lottie-web"

const BuddyHeader = () => {
  const lottieRef = useRef() as React.MutableRefObject<HTMLDivElement>

  let anim: any
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

  return <div style={{ width: 400 }} ref={lottieRef} />
}

export default BuddyHeader
