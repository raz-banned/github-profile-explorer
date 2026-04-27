import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { UserCard } from "./UserCard"
import type { GithubUser } from "../types/GithubUser"
import { octokit } from "../api/github"
import { useParams } from "react-router"
import { RequestError } from "octokit"

export function UserProfile({
  onError,
}: {
  onError: Dispatch<SetStateAction<RequestError | Error | null>>
}) {
  const [user, setUser] = useState<GithubUser | null>(null)

  const { login } = useParams()

  if (!login) {
    throw new Error("Login parameter is missing")
  }

  useEffect(() => {
    let isMounted = true

    const getUserProfile = async () => {
      try {
        const { data } = await octokit.rest.users.getByUsername({
          username: login,
        })
        if (!isMounted) return
        setUser(data)
      } catch (err) {
        if (!isMounted) return
        if (err instanceof RequestError) {
          onError(err)
        } else {
          onError(new Error("Неожиданная ошибка"))
        }
      }
    }
    getUserProfile()

    return () => {
      isMounted = false
    }
  }, [login, onError])

  return <UserCard user={user} />
}
