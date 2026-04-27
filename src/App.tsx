import HomePage from "./pages/home-page"
import { Route, Routes } from "react-router"
import { UserPage } from "./pages/user-page"

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:login" element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App
