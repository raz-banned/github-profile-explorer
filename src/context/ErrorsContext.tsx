import type { RequestError } from "octokit"
import { createContext, type Dispatch, type SetStateAction } from "react"

interface ErrorsContextValue {
  userError: RequestError | Error | null
  reposError: RequestError | Error | null
  setUserError: Dispatch<SetStateAction<RequestError | Error | null>>
  setReposError: Dispatch<SetStateAction<RequestError | Error | null>>
}

export const ErrorsContext = createContext<ErrorsContextValue | null>(null)
