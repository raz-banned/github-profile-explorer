import githubLogo from "./assets/github-logo.png"
import { Navbar } from "./Navbar"

export function Header() {
  return (
    <header className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-8 p-4">
      <img src={githubLogo} alt="GitHub Logo" className="h-16 w-16" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold">GitHub Profile Explorer</h1>
        <p className="max-w-md text-center text-muted-foreground">
          Введите имя пользователя чтобы посмотреть профиль, репозитории и
          статистику
        </p>
      </div>
      <Navbar />
    </header>
  )
}
