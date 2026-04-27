import { useEffect, useState } from "react"
import { UserCard } from "./UserCard"
import type { GithubUser } from "./types/GithubUser"
import { octokit } from "./api/github"
import { useParams } from "react-router"
import { RequestError } from "octokit"

export function UserProfile() {
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
        console.log(data)
        setUser(data)
      } catch (err: RequestError | unknown) {
        if (!isMounted) return
        if (err instanceof RequestError) {
          if (err.status) {
            console.log(`Error ${err.status}: ${err.message}`)
          } else {
            console.error("Error fetching user profile:", err)
          }
        } else {
          console.error("Unexpected error:", err)
        }
      }
    }
    getUserProfile()

    return () => {
      isMounted = false
    }
  }, [login])

  return <UserCard user={user} />
}
