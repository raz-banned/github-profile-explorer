import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "./ui/field"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useNavigate } from "react-router"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    navigate(`/user/${searchQuery}`)
  }

  return (
    <Field className="w-full max-w-lg">
      <FieldLabel
        htmlFor="input-field-username"
        className="text-sm font-medium"
      >
        Имя пользователя
      </FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Введите имя пользователя"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        className="min-h-8 w-full rounded-md border p-2"
      />
      <Button onClick={handleSearch} className="w-full">
        Поиск
      </Button>
      <FieldDescription className="text-sm text-muted-foreground">
        Введите название профиля GitHub
      </FieldDescription>
    </Field>
  )
}
