import type { OctokitResponse } from "@octokit/types"
import { RequestError } from "octokit"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useNavigate } from "react-router"

export const useFetch = <T,>(
  fn: () => Promise<OctokitResponse<T>>,
  onError: Dispatch<SetStateAction<RequestError | Error | null>>
) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      setData(null)
      setIsLoading(true)

      try {
        const { data } = await fn()
        if (!isMounted) return
        setIsLoading(false)
        setData(data)
      } catch (err) {
        if (!isMounted) return
        setIsLoading(false)
        if (err instanceof RequestError) {
          if (err.status === 404) {
            navigate("*")
          } else {
            onError(err)
          }
        } else {
          onError(new Error("Неожиданная ошибка"))
        }
      }
    }
    fetchData()

    return () => {
      isMounted = false
    }
  }, [fn, onError, navigate])

  return { data, isLoading }
}
