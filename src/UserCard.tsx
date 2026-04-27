import { RiHeartFill, RiMapPinLine } from "@remixicon/react"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import type { GithubUser } from "./types/GithubUser"
import { Spinner } from "./components/ui/spinner"
import { toast } from "sonner"

export function UserCard({ user }: { user: GithubUser | null }) {
  const handleCopy = () => {
    try {
      if (!user) throw new Error("Не был найден пользователь")
      navigator.clipboard.writeText(user.url)
      toast.success("Успешно скопировано")
    } catch (err) {
      console.error("Не смогли скопировать!", err)
    }
  }

  return user ? (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={user.avatar_url}
        alt="User avatar"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">
            <RiHeartFill color="rgba(224,176,255,1)" />
            <span>{user.followers}</span>
          </Badge>
        </CardAction>
        <CardTitle>{user.name}</CardTitle>
        <span className="flex gap-1">
          <RiMapPinLine size={18} color="rgba(224,176,255,1)" />
          {user.location}
        </span>
        <CardDescription>{user.bio}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={handleCopy}>
          Copy github link
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Spinner />
  )
}
