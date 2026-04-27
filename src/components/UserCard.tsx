import { RiHeartFill, RiMapPinLine } from "@remixicon/react"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import type { GithubUser } from "../types/GithubUser"
import { toast } from "sonner"
import { LoadingSkeleton } from "./LoadingSkeleton"

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
    <Card className="w-full max-w-sm overflow-hidden pt-0">
      <div className="relative h-24 w-full">
        <img
          src={user.avatar_url || "https://via.placeholder.com/150"}
          alt="User avatar"
          className="h-full w-full object-cover blur-sm brightness-60"
        />
        <img
          src={user.avatar_url || "https://via.placeholder.com/150"}
          alt="User avatar round"
          className="absolute -bottom-8 left-4 h-16 w-16 rounded-full border-4 border-background"
        />
      </div>
      <CardHeader className="mt-8">
        <CardAction>
          <Badge variant="secondary">
            <RiHeartFill className="text-purple-300" />
            <span>{user.followers}</span>
          </Badge>
        </CardAction>

        <CardTitle>{user.name || "Неизвестное имя"}</CardTitle>

        <span className="flex gap-1">
          <RiMapPinLine size={18} className="text-purple-300" />
          {user.location || "Неизвестная локация"}
        </span>

        <CardDescription>{user.bio || "Нет описания"}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={handleCopy}>
          Скопировать ссылку
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <LoadingSkeleton />
  )
}
