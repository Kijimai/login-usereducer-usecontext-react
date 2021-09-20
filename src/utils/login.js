export const login = async (username, password) => {
  return new Promise((resolve, reject) => {
    console.log(username, password)
    setTimeout(() => {
      if (username === "Jahn" && password === "12345") {
        console.log("Logged In :)")
        resolve()
      } else if (username !== "Jahn" && password !== "12345") {
        reject("Username and Password field cannot be empty.")
      } else if (!username && !password) {
        reject("Invalid Credentials")
      }
    }, 1000)
  })
}
