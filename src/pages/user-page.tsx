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
  const { data: user, isLoading: isUserLoading } = useUserData()
  const { data: userRepos, isLoading: areReposLoading } = useReposData()

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

  return (
    <>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 p-8 md:flex-row">
        <aside className="mx-auto min-w-xs shrink-0 md:top-8 md:border-r md:border-border md:pr-8">
          {isUserLoading ? <UserSkeleton /> : user && <UserCard user={user} />}
        </aside>
        <main className="flex-1">
          {areReposLoading ? (
            <ReposSkeleton />
          ) : (
            userRepos && (
              <UserRepos
                userRepos={userRepos}
                reposLength={user?.public_repos ?? 0}
              />
            )
          )}
        </main>
        <Toaster />
      </div>
    </>
  )
}

export default UserPage
