# GitHub Profile Explorer

A web app for exploring GitHub profiles and repositories built with React and TypeScript.

![GitHub Profile Explorer](/public/homepage.png)

## Features

- Search any GitHub user by username
- View profile info — avatar, bio, location, followers
- Browse repositories with language filter and sort by stars
- Detailed repository page — topics, license, open issues, last updated
- Loading skeletons for all async states
- Error handling with descriptive messages

## Stack

- **React** + **TypeScript**
- **React Router** — client-side routing
- **shadcn/ui** + **Tailwind CSS** — UI components and styling
- **Octokit** — GitHub REST API client

## Getting Started

```bash
git clone https://github.com/raz-banned/github-profile-explorer
cd github-profile-explorer
npm install
npm run dev
```

> Note: The GitHub API allows 60 unauthenticated requests per hour. To increase the limit, add a personal access token to the Octokit instance in `src/api/github.ts`.

## Project Structure

```
src/
├── components/     # UI components
├── hooks/          # Custom hooks (useFetch, useUserData, useReposData)
├── context/        # Error context
├── pages/          # Route-level components
├── types/          # TypeScript interfaces
└── utils/          # Language color mappings
```
