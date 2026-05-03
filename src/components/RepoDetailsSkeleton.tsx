import { Skeleton } from "./ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Separator } from "./ui/separator"

export function RepoDetailsSkeleton() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-7xl flex-col gap-12 px-8 pt-8 md:flex-row">
      <main className="flex flex-col gap-4 md:flex-1">
        <Skeleton className="h-4 w-48" /> {/* breadcrumb */}
        <Skeleton className="h-8 w-64" /> {/* h1 */}
        <Skeleton className="h-16 w-full" /> {/* description */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Separator />
        <div className="flex gap-6">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-12" />
        </div>
      </main>
      <aside className="shrink-0">
        <Card className="mx-auto max-w-xs min-w-70">
          <CardHeader>
            <Skeleton className="h-5 w-32" />
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-9 w-full" />
          </CardFooter>
        </Card>
      </aside>
    </div>
  )
}
