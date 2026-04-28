import type { RequestError } from "octokit"
import { createContext, type Dispatch, type SetStateAction } from "react"

interface ErrorsContextValue {
  userError: RequestError | Error | null
  repoError: RequestError | Error | null
  setUserError: Dispatch<SetStateAction<RequestError | Error | null>>
  setRepoError: Dispatch<SetStateAction<RequestError | Error | null>>
}

export const ErrorsContext = createContext<ErrorsContextValue | null>(null)
