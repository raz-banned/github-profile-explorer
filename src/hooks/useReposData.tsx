import { useParams } from "react-router"
import { useErrorContext } from "./useErrorContext"
import { useState } from "react"
import type { GithubRepo } from "@/types/GithubRepo"
import { useFetch } from "./useFetch"
import { octokit } from "@/api/github"

export const useReposData = () => {
  const { setReposError } = useErrorContext()
  const { login } = useParams() as { login: string }

  const [currentPage, setCurrentPage] = useState(1)

  const userRepos = useFetch<GithubRepo[]>(
    async () =>
      await octokit.rest.repos.listForUser({
        username: login,
        per_page: 30,
        page: currentPage,
      }),
    setReposError
  )

  return userRepos
}
