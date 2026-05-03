import type { octokit } from "@/api/github"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

export type GithubRepoDetails = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.get
>
