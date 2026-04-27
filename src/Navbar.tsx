import { NavButtons } from "./NavButtons"
import { SearchBar } from "./SearchBar"

export function Navbar() {
  return (
    <nav className="flex w-full max-w-lg flex-col items-center gap-4">
      <SearchBar />
      <NavButtons />
    </nav>
  )
}
