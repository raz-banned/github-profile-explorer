import { useState, type ReactNode } from "react"
import { ErrorsContext } from "./ErrorsContext"
import type { RequestError } from "octokit"

export function ErrorsProvider({ children }: { children: ReactNode }) {
  const [userError, setUserError] = useState<RequestError | Error | null>(null)
  const [reposError, setReposError] = useState<RequestError | Error | null>(
    null
  )

  return (
    <ErrorsContext
      value={{ userError, reposError, setUserError, setReposError }}
    >
      {children}
    </ErrorsContext>
  )
}
