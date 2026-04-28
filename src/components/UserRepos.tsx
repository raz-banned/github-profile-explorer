import type { GithubRepo } from "@/types/GithubRepo"
import { Button } from "./ui/button"
import { Card, CardAction, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

export function UserRepos({
  userRepos,
  reposLength,
}: {
  userRepos: GithubRepo[] | null
  reposLength: number
}) {
  const languages = [...new Set(userRepos?.map((repo) => repo.language))]

  return (
    <div>
      <span>Репозитории: {reposLength}</span>
      <div>
        <Button>Все</Button>
        {languages?.map((language) => (
          <Button key={language}>{language}</Button>
        ))}
      </div>
      <div>
        {userRepos?.map((repo) => (
          <Card key={repo.id}>
            <CardHeader>
              <CardAction>
                <Badge>Lang</Badge>
                <Badge>Stars</Badge>
              </CardAction>
              <CardTitle>Name</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
