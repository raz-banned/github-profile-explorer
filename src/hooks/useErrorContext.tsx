import { ErrorsContext } from "@/context/ErrorsContext"
import { useContext } from "react"

export const useErrorContext = () => {
  const context = useContext(ErrorsContext)

  if (!context) {
    throw new Error("useErrorContext must be used within an ErrorsProvider")
  }

  return context
}
