import React from "react"
import { useGlobalContext } from "../context"

const ErrorMsg = () => {
  const { errorMsg } = useGlobalContext()

  return (
    <>
      <p className="error">{errorMsg}</p>
    </>
  )
}

export default ErrorMsg
