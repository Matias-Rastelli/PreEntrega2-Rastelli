import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">ERROR: 404 - NOT FOUND</Typography>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/201.png"
          alt="page not found"
        />
      </Box>
      <Link to="/">
        <Button variant="contained" size="large">
          Volver a la página principal
        </Button>
      </Link>
    </Box>
  )
}
