import { RepoDetails } from "@/components/RepoDetails"
import { RepoDetailsSkeleton } from "@/components/RepoDetailsSkeleton"
import { useRepoData } from "@/hooks/useRepoData"
import { useLocation } from "react-router"

function RepoDetailsPage() {
  const location = useLocation()
  const initialData = location.state?.repo
  const { data: repo, isLoading } = useRepoData()

  if (isLoading && !initialData) {
    return <RepoDetailsSkeleton />
  }

  return <RepoDetails repo={repo || initialData} />
}

export default RepoDetailsPage
