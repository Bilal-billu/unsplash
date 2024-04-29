import Main from "./components/body/main/Main"
import Nav from "./components/nav/Nav"

function App() {

  return (
    <div>
      <nav className="hidden md:block">
        <Nav />
      </nav>
      <main>
        <Main />
      </main>
    </div>
  )
}

export default App
