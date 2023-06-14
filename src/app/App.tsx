import { Home } from "../pages/Home/Home"
import { HomeLayout } from "../widgets/layouts/HomeLayout"
import "./index.scss"

function App() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}

export default App
