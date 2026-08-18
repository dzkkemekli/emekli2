import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Ozgecmis from "@/pages/Ozgecmis"
import Gorevler from "@/pages/Gorevler"
import Oduller from "@/pages/Oduller"
import Galeri from "@/pages/Galeri"
import NotFound from "@/pages/NotFound"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ozgecmis", element: <Ozgecmis /> },
      { path: "/gorevler", element: <Gorevler /> },
      { path: "/oduller", element: <Oduller /> },
      { path: "/galeri", element: <Galeri /> },
      { path: "*", element: <NotFound /> },
    ],
  },
], { basename: import.meta.env.BASE_URL })

export default function App() {
  return <RouterProvider router={router} />
}
