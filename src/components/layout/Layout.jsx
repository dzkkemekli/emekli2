import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import { motion } from "motion/react"

import Navbar from "@/components/layout/Navbar"
import Contributors from "@/components/sections/Contributors"

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Contributors />
      <ScrollRestoration />
    </div>
  )
}
