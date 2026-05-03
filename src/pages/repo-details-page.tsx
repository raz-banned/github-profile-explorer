import { RepoDetails } from "@/components/RepoDetails"
import { useRepoData } from "@/hooks/useRepoData"
import type { GithubRepo } from "@/types/GithubRepo"
import { useLocation } from "react-router"

function RepoDetailsPage() {
  const location = useLocation()
  const initialData = location.state?.repo

  const mockRepo = {
    id: 1,
    name: "linux",
    language: "C",
    stargazers_count: 24100,
    owner: { login: "torvalds" },
    description:
      "The Linux kernel is a mostly free and open-source, monolithic, modular, multitasking, Unix-like operating system kernel.",
    topics: ["octocat", "atom", "electron", "API"],
    license: { name: "GPL-2.0" },
    updated_at: "2024-06-01T12:00:00Z",
    url: "https://github.com/torvalds/linux",
    forks_count: 8000,
    open_issues_count: 500,
  }

  return <RepoDetails repo={mockRepo} />
}

export default RepoDetailsPage
