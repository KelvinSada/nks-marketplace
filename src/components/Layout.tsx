import { Outlet } from "react-router-dom"
import TopMenu from "./common/TopMenu"

const Layout = () => {
  return (
    <div>
      <TopMenu/>

      <main>
        <Outlet/>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  )
}

export default Layout
