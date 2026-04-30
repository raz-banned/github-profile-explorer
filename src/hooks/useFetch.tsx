import type { OctokitResponse } from "@octokit/types"
import { RequestError } from "octokit"
import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import { useNavigate } from "react-router"

export const useFetch = <T,>(
  fn: () => Promise<OctokitResponse<T>>,
  onError: Dispatch<SetStateAction<RequestError | Error | null>>
) => {
  const [data, setData] = useState<T | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        const { data } = await fn()
        if (!isMounted) return
        setData(data)
      } catch (err) {
        if (!isMounted) return
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
  }, [fn, onError])

  return data
}
