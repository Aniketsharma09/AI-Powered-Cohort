import Navbar from "./Components/Navbar"
import MainRoute from "./routes/MainRoute"

const App = () => {
  return (
    <div className="bg-[var(--bg-gradient)]  h-screen w-screen p-5 overflow-auto overflow-x-hidden text-slate-700">
      <Navbar/>
      <MainRoute/>
    </div>
  )
}

export default App