import { RepoDetails } from "@/components/RepoDetails"
import { useRepoData } from "@/hooks/useRepoData"

function RepoDetailsPage() {
  const { data: repo, isLoading } = useRepoData()

  return <RepoDetails repo={repo} />
}

export default RepoDetailsPage
