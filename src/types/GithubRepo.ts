import type { octokit } from "@/api/github"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

export type GithubRepo = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.repos.listForUser
>[number]
