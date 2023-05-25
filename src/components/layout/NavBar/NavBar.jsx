import { ButtonGroup, Button, Box, Typography } from "@mui/material"
import { CartWidget } from "../../common/cartWidget/CartWidget"

export const NavBar = () => {
  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        padding: 3,
        paddingRight: 10,
        backgroundColor: "lightgray",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 600,
          letterSpacing: ".2rem",
          fontFamily: "monospace",
        }}
      >
        NOMBRE EMPRESA
      </Typography>
      <ButtonGroup variant="contained" color="primary" size="large">
        <Button>Categoria 1</Button>
        <Button>Categoria 2</Button>
        <Button>Categoria 3</Button>
        <Button>Categoria 4</Button>
      </ButtonGroup>
      <CartWidget />
    </Box>
  )
}
