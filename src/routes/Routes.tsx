import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectFooter } from "../components/layout/ProjectFooter"
import { ProjectNavbar } from "../components/layout/ProjectNavbar"
import { Home } from "../pages/Home"
import { ScrollTop } from "../components/layout/ScrollTop"


export const Route_Items = [
    { name: "Home", link: "/", element: <Home /> },
    { name: "Home", link: "/*", element: <Home /> },
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