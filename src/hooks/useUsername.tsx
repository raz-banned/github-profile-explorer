import { UsernameContext } from "@/context/Username"
import { useContext } from "react"

export const useUsername = () => {
  const context = useContext(UsernameContext)
  if (!context) {
    throw new Error("Context must be used within a UsernameProvider")
  }
  return context
}
