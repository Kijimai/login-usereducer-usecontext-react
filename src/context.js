import React, { useContext, useState } from "react"
import { login } from "./utils/login"
//This is the context wrapper
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const handleChange = (e) => {
    console.log(e)
    // const { username, password } = e.target.name
    // console.log(username.value)
    // console.log(password.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, password } = e.target
    setIsLoading(true)
    try {
      await login(username.value, password.value)
      setIsError(false)
      setIsLoggedIn(true)
    } catch (error) {
      setIsError(true)
      setErrorMsg(error)
    }
    setIsLoading(false)
  }

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        isError,
        errorMsg,
        username,
        password,
        setUsername,
        setPassword,
        handleSubmit,
        handleChange,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
