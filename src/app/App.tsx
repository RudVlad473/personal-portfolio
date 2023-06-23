import { Home } from "../pages/Home/Home"
import { HomeLayout } from "../widgets/layouts/HomeLayout"
import "./index.scss"
import { withProviders } from "./providers"

export const App = withProviders(() => {
  return (
    <HomeLayout>
      <Home />
    </HomeLayout>
  )
})
