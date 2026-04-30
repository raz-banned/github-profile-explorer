import type { GithubUser } from "@/types/GithubUser"
import { useFetch } from "./useFetch"
import { useErrorContext } from "./useErrorContext"
import { octokit } from "@/api/github"
import { useParams } from "react-router"

export const useUserData = () => {
  const { setUserError } = useErrorContext()

  const { login } = useParams() as { login: string }

  const user = useFetch<GithubUser>(
    async () =>
      await octokit.rest.users.getByUsername({
        username: login,
      }),
    setUserError
  )

  return user
}
