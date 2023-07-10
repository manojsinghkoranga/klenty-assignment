import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Element from "./components/Element";
import Search from "./components/Search";


const router = createBrowserRouter([
    {
        path: "/", element: <App />
    },{
        path: "/international", element: <Element field={"international"} />
    },{
        path: "/national", element: <Element field={"india"} />
    },{
        path: "/science", element: <Element field={"ScienceandTechnology"} />
    },{
        path: "/sports", element: <Element field={"sports"} />
    },{
        path: "/entertainment", element: <Element field={"Entertainment"} />
    },{
        path: "/search/:field", element: <Search />
    }

])
const Pages = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Pages;