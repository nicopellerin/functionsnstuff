import * as React from "react"
import { useRef, useEffect } from "react"
import lottie from "lottie-web"

interface Props {
  toggleBrowser: boolean
  path?: string
  size?: number
}

const Buddy: React.FC<Props> = ({
  toggleBrowser,
  path = "/anim.json",
  size = 400,
}) => {
  const lottieRef = useRef() as React.MutableRefObject<HTMLDivElement>

  let anim: any

  useEffect(() => {
    anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path,
    })

    return () => anim.destroy()
  })

  useEffect(() => {
    toggleBrowser ? anim.play() : anim.stop()
  }, [toggleBrowser])

  return <div style={{ width: size, marginTop: 30 }} ref={lottieRef} />
}

export default Buddy
