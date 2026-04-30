import type { GithubRepo } from "@/types/GithubRepo"
import { Button } from "./ui/button"
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { RiStarFill } from "@remixicon/react"
import { useState } from "react"
import { ReposSkeleton } from "./ReposSkeleton"

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  TypeScript: "#2b7489",
  "C++": "#f34b7d",
  "C#": "#178600",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Default: "#ccc",
}

export function UserRepos({
  userRepos,
  reposLength,
}: {
  userRepos: GithubRepo[] | null
  reposLength: number
}) {
  const [activeLanguage, setActiveLanguage] = useState("All")
  if (!userRepos) return <ReposSkeleton />

  const languages = [
    ...new Set(
      userRepos
        .map((repo) => repo.language)
        .filter((language): language is string => Boolean(language))
    ),
  ]

  const filteredRepos =
    activeLanguage === "All"
      ? userRepos
      : userRepos.filter((repo) => repo.language === activeLanguage)

  return (
    <div className="flex w-full max-w-4xl flex-col gap-4">
      <div className="mb-6 flex items-baseline gap-3">
        <h2 className="text-lg font-semibold">Репозитории</h2>
        <span className="text-sm text-muted-foreground">{reposLength}</span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={activeLanguage === "All" ? "default" : "outline"}
          onClick={() => setActiveLanguage("All")}
        >
          Все
        </Button>
        {languages.map((language) => (
          <Button
            size="sm"
            variant={activeLanguage === language ? "default" : "outline"}
            key={language}
            onClick={() => setActiveLanguage(language)}
          >
            {language}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRepos.map((repo) => (
          <Card
            key={repo.id}
            className="flex flex-col justify-between transition-colors hover:bg-accent"
          >
            <CardHeader>
              <CardAction>
                <Badge variant="outline" className="flex gap-1">
                  <RiStarFill className="text-yellow-300" />
                  <span>{repo.stargazers_count}</span>
                </Badge>
              </CardAction>
              <CardTitle className="truncate text-base">{repo.name}</CardTitle>
            </CardHeader>
            <CardFooter>
              <CardAction>
                <Badge variant="secondary">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{
                      background:
                        languageColors[repo.language || ""] ||
                        languageColors["Default"],
                    }}
                  />
                  {repo.language || "Неизвестно"}
                </Badge>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
        {filteredRepos.length === 0 && (
          <div className="col-span-full py-16 text-center text-muted-foreground">
            Нет репозиториев на {activeLanguage}
          </div>
        )}
      </div>
    </div>
  )
}
