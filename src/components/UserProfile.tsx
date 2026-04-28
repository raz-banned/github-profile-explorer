import { useState } from "react"
import { UserCard } from "./UserCard"
import type { GithubUser } from "../types/GithubUser"
import { octokit } from "../api/github"
import { useParams } from "react-router"
import type { GithubRepo } from "@/types/GithubRepo"

import { UserRepos } from "./UserRepos"
import { useFetch } from "@/hooks/useFetch"
import { useErrorContext } from "@/hooks/useErrorContext"

export function UserProfile() {
  const [currentPage, setCurrentPage] = useState(1)

  const { setUserError, setRepoError } = useErrorContext()

  const { login } = useParams()
  if (!login) {
    throw new Error("Login parameter is missing")
  }

  const user = useFetch<GithubUser>(
    async () =>
      await octokit.rest.users.getByUsername({
        username: login,
      }),
    setUserError
  )
  const userRepos = useFetch<GithubRepo[]>(
    async () =>
      await octokit.rest.repos.listForUser({
        username: login,
        per_page: 30,
        page: currentPage,
      }),
    setRepoError
  )

  return (
    <>
      <UserCard user={user} />
      <UserRepos userRepos={userRepos} reposLength={user?.public_repos ?? 0} />
    </>
  )
}
