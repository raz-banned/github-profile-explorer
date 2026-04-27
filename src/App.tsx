import { useState } from "react"
import { UsernameContext } from "./context/Username"
import HomePage from "./pages/home-page"
import { Route, Routes } from "react-router"
import { UserPage } from "./pages/user-page"

export function App() {
  const [username, setUsername] = useState("")

  return (
    <>
      <UsernameContext value={{ username, setUsername }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:login" element={<UserPage />} />
        </Routes>
      </UsernameContext>
    </>
  )
}

export default App
