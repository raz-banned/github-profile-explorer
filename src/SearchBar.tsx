import { useState } from "react"
import { Field, FieldDescription, FieldLabel } from "./components/ui/field"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Field className="w-full max-w-lg">
      <FieldLabel
        htmlFor="input-field-username"
        className="text-lg font-medium"
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
      <Button onClick={() => {}} className="w-full">
        Поиск
      </Button>
      <FieldDescription className="text-sm text-muted-foreground">
        Введите название профиля GitHub
      </FieldDescription>
    </Field>
  )
}
