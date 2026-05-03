import { ErrorAlert } from "@/components/ErrorAlert"
import { ReposSkeleton } from "@/components/ReposSkeleton"
import { UserCard } from "@/components/UserCard"
import { UserRepos } from "@/components/UserRepos"
import { UserSkeleton } from "@/components/UserSkeleton"
import { useErrorContext } from "@/hooks/useErrorContext"
import { useReposData } from "@/hooks/useReposData"
import { useUserData } from "@/hooks/useUserData"
import { RequestError } from "octokit"
import { Toaster } from "sonner"

function UserPage() {
  const { userError, reposError } = useErrorContext()

  const mockUser = {
    login: "torvalds",
    public_repos: 10,
    followers: 100000,
    avatar_url: "https://avatars.githubusercontent.com/u/1024025?v=4",
    name: "Linus Torvalds",
    location: "Portland, OR",
    bio: "Software Engineer, Creator of Linux and Git",
  }

  const mockReposUser = [
    {
      id: 1,
      name: "linux",
      language: "C",
      stargazers_count: 24100,
      owner: { login: "torvalds" },
      topics: ["octocat", "atom", "electron", "API"],
    },
    {
      id: 2,
      name: "uemacs",
      language: "C",
      stargazers_count: 719,
      owner: { login: "torvalds" },
    },
    {
      id: 3,
      name: "john",
      language: "JavaScript",
      stargazers_count: 1000,
      owner: { login: "torvalds" },
    },
    {
      id: 4,
      name: "jane",
      language: "C++",
      stargazers_count: 600,
      owner: { login: "torvalds" },
    },
    {
      id: 5,
      name: "mark",
      language: "Python",
      stargazers_count: 300,
      owner: { login: "torvalds" },
    },
  ]

  if (userError) {
    return (
      <ErrorAlert
        status={userError instanceof RequestError ? userError.status : null}
        message={userError.message}
      />
    )
  }
  if (reposError) {
    return (
      <ErrorAlert
        status={reposError instanceof RequestError ? reposError.status : null}
        message={reposError.message}
      />
    )
  }

  if (!mockUser) return <UserSkeleton />
  if (!mockReposUser || !mockReposUser.length) return <ReposSkeleton />

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-7xl flex-col gap-8 p-8 md:flex-row">
      <aside className="mx-auto min-w-xs flex-1/4 shrink-0 md:border-r md:border-border md:pr-8">
        <div className="sticky top-20 md:top-8">
          <UserCard user={mockUser} />
        </div>
      </aside>
      <main className="min-h-0 flex-3/4">
        <UserRepos
          userRepos={mockReposUser}
          reposLength={mockUser.public_repos ?? 0}
        />
      </main>
      <Toaster />
    </div>
  )
}

export default UserPage
