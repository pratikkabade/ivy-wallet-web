import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectFooter } from "../components/layout/ProjectFooter"
import { ProjectNavbar } from "../components/layout/ProjectNavbar"
import { Home } from "../pages/Home"
import { ScrollTop } from "../hooks/ScrollTop"
import { Accounts } from "../pages/Accounts"
import { Category } from "../pages/Category"


export const Route_Items = [
    { name: "Home", link: "/", element: <Home /> },
    { name: "Home", link: "/Accounts", element: <Accounts /> },
    { name: "Home", link: "/Accounts/*", element: <Accounts /> },
    { name: "Home", link: "/Category", element: <Category /> },
    { name: "Home", link: "/Category/*", element: <Category /> },
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