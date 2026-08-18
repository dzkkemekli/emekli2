import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "@/components/layout/Layout"
import Home from "@/pages/Home"
import Ozgecmis from "@/pages/Ozgecmis"
import Gorevler from "@/pages/Gorevler"
import Oduller from "@/pages/Oduller"
import NotFound from "@/pages/NotFound"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/ozgecmis", element: <Ozgecmis /> },
      { path: "/gorevler", element: <Gorevler /> },
      { path: "/oduller", element: <Oduller /> },
      { path: "*", element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
