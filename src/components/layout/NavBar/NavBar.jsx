import { ButtonGroup, Button, Box, Typography, Stack } from "@mui/material"
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
        align="center"
        sx={{
          fontWeight: 600,
          letterSpacing: ".2rem",
          fontFamily: "monospace",
        }}
      >
        PokeTienda
      </Typography>
      <Stack spacing={1}>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="large"
          fullWidth="true"
        >
          <Button>Acero</Button>
          <Button>Agua</Button>
          <Button>Bicho</Button>
          <Button>Dragón</Button>
          <Button>Eléctrico</Button>
          <Button>Fantasma</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="large"
          fullWidth="true"
        >
          <Button>Fuego</Button>
          <Button>Hada</Button>
          <Button>Hielo</Button>
          <Button>Lucha</Button>
          <Button>Normal</Button>
          <Button>Planta</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="primary"
          size="large"
          fullWidth="true"
        >
          <Button>Psíquico</Button>
          <Button>Roca</Button>
          <Button>Suministro</Button>
          <Button>Tierra</Button>
          <Button>Veneno</Button>
          <Button>Volador</Button>
        </ButtonGroup>
      </Stack>
      <CartWidget />
    </Box>
  )
}
