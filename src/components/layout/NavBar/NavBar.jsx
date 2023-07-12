import { ButtonGroup, Button, Box, Typography, Stack } from "@mui/material"
import { CartWidget } from "../../common/cartWidget/CartWidget"
import { Link, Outlet } from "react-router-dom"
import "./Navbar.css"

export const NavBar = () => {
  return (
    <>
      <Box
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "100vw",
          padding: 1,
          paddingRight: 10,
          backgroundColor: "#3a3a3ac2",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 600,
            letterSpacing: ".2rem",
            fontFamily: "monospace",
          }}
        >
          <Link to="/">PokeTienda</Link>
        </Typography>
        <Button variant="contained" size="small">
          <Link to="/">TODOS</Link>
        </Button>
        <Stack spacing={1}>
          <ButtonGroup
            variant="contained"
            color="primary"
            size="small"
            fullWidth={true}
          >
            <Button>
              <Link to="/type/acero">Acero</Link>
            </Button>

            <Button>
              <Link to="/type/agua">Agua</Link>
            </Button>
            <Button>
              <Link to="/type/bicho">Bicho</Link>
            </Button>
            <Button>
              <Link to="/type/dragon">Dragón</Link>
            </Button>
            <Button>
              <Link to="/type/electrico">Eléctrico</Link>
            </Button>
            <Button>
              <Link to="/type/fantasma">Fantasma</Link>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            size="small"
            fullWidth={true}
          >
            <Button>
              <Link to="/type/fuego">Fuego</Link>
            </Button>

            <Button>
              <Link to="/type/hada">Hada</Link>
            </Button>
            <Button>
              <Link to="/type/hielo">Hielo</Link>
            </Button>
            <Button>
              <Link to="/type/lucha">Lucha</Link>
            </Button>
            <Button>
              <Link to="/type/normal">Normal</Link>
            </Button>
            <Button>
              <Link to="/type/planta">Planta</Link>
            </Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            size="small"
            fullWidth={true}
          >
            <Button>
              <Link to="/type/psiquico">Psíquico</Link>
            </Button>

            <Button>
              <Link to="/type/roca">Roca</Link>
            </Button>
            <Button>
              <Link to="/type/siniestro">Siniestro</Link>
            </Button>
            <Button>
              <Link to="/type/tierra">Tierra</Link>
            </Button>
            <Button>
              <Link to="/type/veneno">Veneno</Link>
            </Button>
            <Button>
              <Link to="/type/volador">Volador</Link>
            </Button>
          </ButtonGroup>
        </Stack>
        <CartWidget />
      </Box>
      <Outlet />
    </>
  )
}
