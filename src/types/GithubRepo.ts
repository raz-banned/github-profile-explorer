import type { octokit } from "@/api/github"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

export type GithubRepos = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForUser
>
