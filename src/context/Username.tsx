import { createContext, type Dispatch, type SetStateAction } from "react"

export const UsernameContext = createContext<{
  username: string
  setUsername: Dispatch<SetStateAction<string>>
} | null>(null)
