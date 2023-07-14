import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { Box, Button, Chip, IconButton, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"

export const Cart = () => {
  const { cart, deleteAll, deleteItem, totalPrice } = useContext(CartContext)

  const total = totalPrice()

  const deleteOne = (id) => {
    Swal.fire({
      title: "¿Seguro que quita este super pokémon del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Sacalo",
      cancelButtonText: "NOOOO",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id)
        Swal.fire("Ya sacamos esa cosa!", "uno menos!", "warning")
      }
    })
  }
  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro que quieres limpiar el carrito?",
      text: "¡No puedes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, limpia todo!",
      cancelButtonText: "NOOOO",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAll()
        Swal.fire("Ya sacamos la basura!", "El carrito esta vacío", "success")
      }
    })
  }

  if (cart.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          <Typography variant="h2">No hay nada en el carrito!</Typography>
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png"
            alt="Carrito Vacio"
          />
        </Box>
        <Link to="/">
          <Button variant="contained" size="large">
            Seguir comprando!
          </Button>
        </Link>
      </Box>
    )
  }

  return (
    <div>
      <Button onClick={limpiar}>ELIMINAR TODO</Button>
      <Link to="/checkout">
        <Button>Finalizar compra</Button>
      </Link>
      {cart.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{
              height: "100px",
              width: "60%",
              boxShadow: "5px 5px 3px 0px rgba(0,0,0,0.75)",
              margin: "5px 20px",
              padding: "5px 10px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid black",
              backgroundColor: "#80808074",
            }}
          >
            <Link to={`/itemDetail/${item.id}`}>
              <Stack
                direction="row"
                alignItems="center"
                spacing={3}
                sx={{ width: "200px" }}
              >
                <img
                  src={item.img}
                  alt=""
                  style={{ height: "80px", width: "auto" }}
                />
                <Chip label={item.pokedexN}></Chip>
                <Typography variant="h4">{item.title}</Typography>
              </Stack>
            </Link>
            <Stack
              direction="column"
              alignItems="start"
              spacing={0.5}
              sx={{
                width: "300px",
              }}
            >
              <Typography variant="h6">Cantidad: {item.quantity}</Typography>
              <Typography> Precio por unidad: ${item.price} </Typography>
              <Typography>
                {" "}
                <b> Total: ${item.price * item.quantity}</b>{" "}
              </Typography>
            </Stack>
            <IconButton
              color="error"
              aria-label="delete"
              onClick={() => {
                deleteOne(item.id)
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )
      })}
      <h1> {total} </h1>
    </div>
  )
}
