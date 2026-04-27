import { Button } from "./components/ui/button"
import { useUsername } from "./hooks/useUsername"

export function NavButtons() {
  const { setUsername } = useUsername()

  const handleClick = (username: string) => {
    setUsername(username)
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="font-medium">Попробуйте:</span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleClick("torvalds")}
      >
        torvalds
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleClick("gaearon")}
      >
        gaearon
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleClick("sindresorhus")}
      >
        sindresorhus
      </Button>
    </div>
  )
}
