import React from "react"
import ErrorMsg from "./ErrorMsg"
import { useGlobalContext } from "../context"

const Login = () => {
  const {
    handleSubmit,
    isLoading,
    isError,
    isLoggedIn,
    username,
    password,
    setUsername,
    setPassword,
  } = useGlobalContext()
  return (
    <form className="form" onSubmit={handleSubmit}>
      {isError && <ErrorMsg />}
      {isLoggedIn && <p className="success">Let's Goooooooo</p>}
      <h2>Enter your domain</h2>
      <div className="form-control">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>
      <button disabled={isLoading} className="btn">
        {isLoading ? "Logging In" : "Log In"}
      </button>
    </form>
  )
}

export default Login
