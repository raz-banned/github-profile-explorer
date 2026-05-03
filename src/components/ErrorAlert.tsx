import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RiErrorWarningLine } from "@remixicon/react"

export function ErrorAlert({
  status,
  message,
}: {
  status?: number | null
  message: string
}) {
  const STATUS_MESSAGES: Record<number, string> = {
    404: "Не найдено",
    403: "Превышен лимит запросов",
    401: "Нет доступа",
    500: "Ошибка сервера",
  }

  const errorMessage = status ? (STATUS_MESSAGES[status] ?? message) : message

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center">
      <Alert variant="destructive" className="max-w-md">
        <RiErrorWarningLine />
        <AlertTitle>{status ? `Ошибка: ${status}` : "Ошибка"}</AlertTitle>
        <AlertDescription>{errorMessage}</AlertDescription>
      </Alert>
    </div>
  )
}
