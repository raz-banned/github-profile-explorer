import { UserProfile } from "@/UserProfile"
import { Toaster } from "sonner"

export function UserPage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col gap-8 p-8 md:flex-row">
      <aside className="w-80 shrink-0">
        <div className="sticky top-8">
          <UserProfile />
          <Toaster />
        </div>
      </aside>

      <main className="flex-1"></main>
    </div>
  )
}
