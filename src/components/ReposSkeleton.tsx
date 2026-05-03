import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export function ReposSkeleton() {
  return (
    <div className="flex max-w-4xl flex-col gap-4">
      <div className="mb-6 flex items-baseline gap-3">
        <Skeleton className="h-5 w-44" />
      </div>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-10" />
        <Skeleton className="h-6 w-10" />
        <Skeleton className="h-6 w-10" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <CardAction>
                <Skeleton className="h-4 w-10" />
              </CardAction>
              <CardTitle className="truncate text-base">
                <Skeleton className="h-4 w-20" />
              </CardTitle>
            </CardHeader>
            <CardFooter>
              <CardAction>
                <Skeleton className="h-5 w-14 rounded-full" />
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
