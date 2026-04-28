import { Route, Routes } from "react-router"
import HomePage from "./pages/home-page"
import UserPage from "./pages/user-page"
import { ErrorsProvider } from "./context/ErrorsProvider"

export function App() {
  return (
    <>
      <ErrorsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:login" element={<UserPage />} />
        </Routes>
      </ErrorsProvider>
    </>
  )
}

export default App
