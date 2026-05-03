import { useParams } from "react-router"
import { useFetch } from "./useFetch"
import { octokit } from "@/api/github"
import type { GithubRepoDetails } from "@/types/GIthubRepoDetails"
import { useErrorContext } from "./useErrorContext"
import { useCallback } from "react"

export const useRepoData = () => {
  const { login, repoName } = useParams() as { login: string; repoName: string }

  const { setReposError } = useErrorContext()

  const fetchFn = useCallback(
    async () =>
      await octokit.rest.repos.get({
        owner: login,
        repo: repoName,
      }),
    [login, repoName]
  )
  const userRepos = useFetch<GithubRepoDetails>(fetchFn, setReposError)

  return userRepos
}
