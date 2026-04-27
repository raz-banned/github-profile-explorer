import { useNavigate } from "react-router"
import { Button } from "./ui/button"

export function NavButtons() {
  const navigate = useNavigate()

  const handleClick = (username: string) => {
    navigate(`/user/${username}`)
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
