import type { GithubRepo } from "@/types/GithubRepo"
import type { GithubRepoDetails } from "@/types/GIthubRepoDetails"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { languageColors } from "@/utils/languageColors"
import { RiArrowRightUpLine, RiGitForkLine, RiStarFill } from "@remixicon/react"
import { Button } from "./ui/button"

export function RepoDetails({
  repo,
}: {
  repo: GithubRepoDetails | GithubRepo
}) {
  if (!repo) {
    return <div>Loading...</div>
  }

  const formattedDate = new Date(repo.updated_at ?? "").toLocaleDateString(
    "ru-RU",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <div className="mx-auto flex min-h-dvh max-w-7xl flex-col gap-12 px-8 pt-8 md:flex-row">
      <main className="flex flex-col gap-4 md:flex-1">
        <p className="text-sm text-muted-foreground">
          @{repo.owner?.login} / {repo.name}
        </p>
        <h1 className="text-3xl font-bold">{repo.name}</h1>
        <p className="max-w-prose text-muted-foreground">{repo.description}</p>
        <div className="flex flex-wrap gap-2">
          {repo.topics?.map((topic) => (
            <Badge
              key={topic}
              variant={"secondary"}
              className="p-2 text-xs font-medium"
            >
              {topic}
            </Badge>
          ))}
        </div>
        <Separator />
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <RiStarFill className="text-yellow-400" size={14} />
            <span className="text-xs font-medium">
              {repo.stargazers_count?.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <RiGitForkLine size={14} />
            <span className="text-xs font-medium">
              {repo.forks_count?.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background:
                  languageColors[repo.language || ""] ||
                  languageColors["Default"],
              }}
            />
            <span className="text-xs font-medium">{repo.language}</span>
          </div>
        </div>
      </main>
      <aside className="shrink-0">
        <Card className="mx-auto max-w-xs min-w-70">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              О репозитории
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-muted-foreground">
                Лицензия
              </span>
              <span className="text-sm font-medium">{repo.license?.name}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-muted-foreground">
                Обновлено
              </span>
              <time
                dateTime={String(repo.updated_at)}
                className="text-sm font-medium"
              >
                {formattedDate}
              </time>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-normal text-muted-foreground">
                Открытых issue
              </span>
              <span className="text-sm font-medium">
                {repo.open_issues_count?.toLocaleString()}
              </span>
            </div>
          </CardContent>
          <CardFooter className="flex items-center">
            <Button
              variant="secondary"
              asChild
              className="p-4 text-sm font-medium"
            >
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Смотреть на GitHub
                <RiArrowRightUpLine />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </aside>
    </div>
  )
}
