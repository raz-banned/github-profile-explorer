import { useParams } from "react-router"
import { useErrorContext } from "./useErrorContext"
import type { GithubRepo } from "@/types/GithubRepo"
import { useFetch } from "./useFetch"
import { octokit } from "@/api/github"
import { useCallback } from "react"

export const useReposData = () => {
  const { setReposError } = useErrorContext()
  const { login } = useParams() as { login: string }

  const fetchFn = useCallback(
    async () =>
      await octokit.rest.repos.listForUser({
        username: login,
      }),
    [login]
  )
  const userRepos = useFetch<GithubRepo[]>(fetchFn, setReposError)

  return userRepos
}
