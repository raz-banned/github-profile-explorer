import { Header } from "@/Header"
import { SearchBar } from "@/SearchBar"
import { UserCard } from "@/UserCard"

function HomePage() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-20 p-4">
      <Header />
      <SearchBar />
      <UserCard />
    </div>
  )
}

export default HomePage
