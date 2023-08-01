import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <div
      className="
        max-w-screen-xl
        w-full
        flex
        flex-col
        mx-auto
      "
    >
      <Header />
      <Home />
    </div>
  )
}

export default App