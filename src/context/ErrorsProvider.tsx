import { useState, type ReactNode } from "react"
import { ErrorsContext } from "./ErrorsContext"
import type { RequestError } from "octokit"

export function ErrorsProvider({ children }: { children: ReactNode }) {
  const [userError, setUserError] = useState<RequestError | Error | null>(null)
  const [repoError, setRepoError] = useState<RequestError | Error | null>(null)

  return (
    <ErrorsContext value={{ userError, repoError, setUserError, setRepoError }}>
      {children}
    </ErrorsContext>
  )
}
