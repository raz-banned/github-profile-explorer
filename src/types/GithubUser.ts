import type { octokit } from "@/api/github"
import type { GetResponseDataTypeFromEndpointMethod } from "@octokit/types"

export type GithubUser = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.rest.users.getByUsername
>
