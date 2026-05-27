import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"


function Layout() {
  return (
    <div className="font-mono">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
