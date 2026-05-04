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

export function UserCard({ user }: { user: GithubUser }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(user.url)
    toast.success("Успешно скопировано")
  }

  return (
    <Card className="w-full max-w-sm overflow-hidden pt-0">
      <div className="relative h-24 w-full">
        <img
          src={user.avatar_url}
          alt="User avatar"
          className="h-full w-full object-cover blur-sm brightness-60"
        />
        <img
          src={user.avatar_url}
          alt="User avatar round"
          className="absolute -bottom-8 left-4 h-16 w-16 rounded-full border-4 border-background"
        />
      </div>
      <CardHeader className="mt-8">
        <CardAction>
          <Badge variant="secondary">
            <RiHeartFill className="text-primary" />
            <span>{user.followers}</span>
          </Badge>
        </CardAction>

        <CardTitle>{user.name || "Не указано"}</CardTitle>

        <span className="flex gap-1">
          <RiMapPinLine size={18} className="text-primary" />
          {user.location || "Не указано"}
        </span>

        <CardDescription>{user.bio || "Нет описания"}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={handleCopy}>
          Скопировать ссылку
        </Button>
      </CardFooter>
    </Card>
  )
}
