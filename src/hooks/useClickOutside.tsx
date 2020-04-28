import { useRef, useEffect } from "react"

const useClickOutside = setToggle => {
  const node = useRef(null)

  const handleClick = e => {
    if (!node?.current?.contains(e.target)) {
      setToggle(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return node
}

export default useClickOutside
