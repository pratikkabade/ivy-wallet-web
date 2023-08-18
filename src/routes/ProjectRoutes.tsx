import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectFooter } from "../components/ProjectFooter"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { Home } from "../pages/Home"
import { ScrollTop } from "../hooks/ScrollTop"
import { Dashboard } from "../pages/Dashboard"


export const Route_Items = [
    { name: "Home", link: "/*", element: <Home /> },
    { name: "Home", link: "/IvyWallet", element: <Home /> },
    { name: "Dashboard", link: "/IvyWallet/Dashboard", element: <Dashboard /> },
]

export const Nav_Items = [
    { name: "Home", link: "/IvyWallet" },
    { name: "Dashboard", link: "/IvyWallet/Dashboard" },
]

export const ProjectRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <ProjectNavbar />

                <Routes>
                    {
                        Route_Items.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element} />
                            )
                        })
                    }
                </Routes>

                <ProjectFooter />
                <ScrollTop col={"green"} />

            </BrowserRouter>
        </div>
    )
}