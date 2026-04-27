import { Card, CardAction, CardFooter, CardHeader } from "./ui/card"
import { Skeleton } from "./ui/skeleton"

export function LoadingSkeleton() {
  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0">
      <Skeleton className="h-24 w-full" />
      <CardHeader className="mt-8">
        <CardAction>
          <Skeleton className="h-5 w-16" />
        </CardAction>
        <Skeleton className="absolute top-16 left-4 h-16 w-16 rounded-full" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardFooter>
        <Skeleton className="h-9 w-full" />
      </CardFooter>
    </Card>
  )
}
