import { Home } from "../pages/Home/Home"
import { HomeLayout } from "../widgets/layouts/HomeLayout"
import "./index.scss"
import { withProviders } from "./providers"

function App() {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
}

export default withProviders(App)
