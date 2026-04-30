import { Button } from "@/components/ui/button"
import { Link } from "react-router"

function NotFoundPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4">
      <span className="text-6xl font-bold text-muted-foreground">404</span>
      <h1 className="text-xl font-semibold">Страница не найдена</h1>
      <p className="text-sm text-muted-foreground">
        Пользователь или маршрут не существует
      </p>
      <Button asChild>
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
