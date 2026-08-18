import { Outlet, ScrollRestoration, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
