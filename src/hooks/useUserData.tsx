import type { GithubUser } from "@/types/GithubUser"
import { useFetch } from "./useFetch"
import { useErrorContext } from "./useErrorContext"
import { octokit } from "@/api/github"
import { useParams } from "react-router"
import { useCallback } from "react"

export const useUserData = () => {
  const { setUserError } = useErrorContext()

  const { login } = useParams() as { login: string }

  const fetchFn = useCallback(
    async () =>
      await octokit.rest.users.getByUsername({
        username: login,
      }),
    [login]
  )
  const user = useFetch<GithubUser>(fetchFn, setUserError)

  return user
}
