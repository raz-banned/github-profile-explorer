import { Route, Routes } from "react-router"
import HomePage from "./pages/home-page"
import UserPage from "./pages/user-page"
import { ErrorsProvider } from "./context/ErrorsProvider"
import NotFoundPage from "./pages/not-found-page"
import RepoDetailsPage from "./pages/repo-details-page"

export function App() {
  return (
    <>
      <ErrorsProvider>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="user/:login">
            <Route index element={<UserPage />} />
            <Route path="repos/:repoName" element={<RepoDetailsPage />} />
          </Route>
        </Routes>
      </ErrorsProvider>
    </>
  )
}

export default App
