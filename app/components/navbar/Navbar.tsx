import Container from "../Container"
import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
  return (
    <header className="navbar">
      <Logo />
      <nav className="navigation">
        <Search />
      </nav>
      <Container>
        <div>

        </div>
      </Container>
    </header>
  )
}

export default Navbar