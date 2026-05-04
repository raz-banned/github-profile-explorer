import type { GithubRepo } from "@/types/GithubRepo"
import { Button } from "./ui/button"
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { RiStarFill } from "@remixicon/react"
import { useMemo, useState } from "react"
import { Link } from "react-router"
import { languageColors } from "@/utils/languageColors"

export function UserRepos({
  userRepos,
  reposLength,
}: {
  userRepos: GithubRepo[]
  reposLength: number
}) {
  const [activeLanguage, setActiveLanguage] = useState("All")
  const [sortType, setSortType] = useState("")

  const filteredRepos = useMemo(() => {
    return userRepos
      .filter((repo) => {
        const matchesLanguage =
          activeLanguage === "All" || repo.language === activeLanguage
        return matchesLanguage
      })
      .sort((a, b) => {
        if (sortType === "stars" && a.stargazers_count && b.stargazers_count) {
          return b.stargazers_count - a.stargazers_count
        }
        return 0
      })
  }, [activeLanguage, userRepos, sortType])

  const languages = useMemo(() => {
    return [
      ...new Set(
        userRepos
          .map((repo) => repo.language)
          .filter((language): language is string => Boolean(language))
      ),
    ]
  }, [userRepos])

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
        <Button
          variant={sortType === "stars" ? "default" : "secondary"}
          size="default"
          className="ml-auto"
          onClick={() =>
            setSortType(() => (sortType === "stars" ? "" : "stars"))
          }
        >
          Сортировать по звездам
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRepos.map((repo) => (
          <Link
            key={repo.id}
            to={`/user/${repo.owner.login}/repos/${repo.name}`}
            state={{ repo }}
          >
            <Card className="flex flex-col justify-between transition-colors hover:bg-accent">
              <CardHeader>
                <CardAction>
                  <Badge variant="outline" className="flex gap-1">
                    <RiStarFill className="text-yellow-400" />
                    <span>{repo.stargazers_count ?? 0}</span>
                  </Badge>
                </CardAction>
                <CardTitle className="truncate text-base">
                  {repo.name}
                </CardTitle>
              </CardHeader>
              <CardFooter>
                <CardAction>
                  <Badge variant="secondary">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        background:
                          languageColors[repo.language || ""] ||
                          languageColors.Default,
                      }}
                    />
                    {repo.language || "Не указано"}
                  </Badge>
                </CardAction>
              </CardFooter>
            </Card>
          </Link>
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
