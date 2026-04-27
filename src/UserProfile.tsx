import { useEffect, useState } from "react"
import { UserCard } from "./UserCard"
import type { GithubUser } from "./types/GithubUser"
import { octokit } from "./api/github"

export function UserProfile() {
  const [user, setUser] = useState<GithubUser | null>(null)

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data } = await octokit.rest.users.getByUsername({
          username: "raz-banned",
        })
        console.log(data)
        setUser(data)
      } catch (err) {
        console.log(err)
      }
    }
    getUserProfile()
  }, [])

  return <UserCard user={user} />
}
