import { useState } from "react"
import { UsernameContext } from "./context/Username"
import HomePage from "./pages/home-page"

export function App() {
  const [username, setUsername] = useState("")

  return (
    <>
      <UsernameContext value={{ username, setUsername }}>
        <HomePage />
      </UsernameContext>
    </>
  )
}

export default App
