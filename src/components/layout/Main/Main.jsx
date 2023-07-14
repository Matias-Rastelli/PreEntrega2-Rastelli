import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import { Footer } from "../Footer/Footer"
import { Box } from "@mui/material"

export const Main = () => {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </Box>
  )
}
