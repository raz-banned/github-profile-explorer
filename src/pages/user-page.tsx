import { ErrorAlert } from "@/components/ErrorAlert"
import { UserProfile } from "@/components/UserProfile"
import { RequestError } from "octokit"
import { useState } from "react"
import { Toaster } from "sonner"

export function UserPage() {
  const [error, setError] = useState<RequestError | Error | null>(null)

  return error ? (
    <div className="flex min-h-screen items-center justify-center">
      <ErrorAlert
        status={error instanceof RequestError ? error.status : null}
        message={error.message}
      />
    </div>
  ) : (
    <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8 md:flex-row">
      <aside className="w-80 shrink-0">
        <div className="sticky top-8">
          <UserProfile onError={setError} />
        </div>
      </aside>
      <main className="flex-1">
        <ErrorAlert status={404} message="Пользователь не найден" />
      </main>
      <Toaster />
    </div>
  )
}
