import { ErrorAlert } from "@/components/ErrorAlert"
import { UserProfile } from "@/components/UserProfile"
import { useErrorContext } from "@/hooks/useErrorContext"
import { RequestError } from "octokit"
import { Toaster } from "sonner"

function UserPage() {
  const { userError, repoError } = useErrorContext()

  return userError ? (
    <div className="flex min-h-screen items-center justify-center">
      <ErrorAlert
        status={userError instanceof RequestError ? userError.status : null}
        message={userError.message}
      />
    </div>
  ) : (
    <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8 md:flex-row">
      <aside className="w-80 shrink-0">
        <div className="sticky top-8">
          <UserProfile />
        </div>
      </aside>
      <main className="flex-1"></main>
      <Toaster />
    </div>
  )
}

export default UserPage
