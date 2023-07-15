import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import DeleteIcon from "@mui/icons-material/Delete"
import { cupones } from "../../../cupones"

export const Cart = () => {
  const { cart, deleteAll, deleteItem, totalPrice } = useContext(CartContext)
  const [descuento, setDescuento] = useState(0)
  const [cupon, setCupon] = useState("")

  const total = totalPrice()

  const aplicarCupon = () => {
    const index = cupones.findIndex((cuponX) => cuponX.key == cupon)
    index != -1 ? cuponValido() : cuponInvalido()

    function cuponValido() {
      setDescuento(total * cupones[index].value)
    }

    function cuponInvalido() {
      setDescuento(0)
    }
  }

  const colorCupon = () => {
    if (cupon === "") {
      return null
    }
    const color = descuento > 0 ? "lightgreen" : "red"
    return color
  }

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
    <Stack direction="row" alignItems="center" margin="25px 0px">
      <Box
        sx={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          {cart.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  height: "100px",
                  width: "90%",
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
                  <Typography variant="h6">
                    Cantidad: {item.quantity}
                  </Typography>
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
        </Box>
        <Box sx={{ alignSelf: "flex-end", margin: "10px 100px" }}>
          <Button
            onClick={limpiar}
            variant="contained"
            color="error"
            sx={{ width: "180px" }}
          >
            ELIMINAR TODO
          </Button>
        </Box>
      </Box>

      <Stack
        width="30%"
        height="400px"
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
        sx={{
          backgroundColor: "#80808074",
          padding: "25px",
          border: "1px solid black",
          boxShadow: "5px 5px 3px 0px rgba(0,0,0,0.75)",
        }}
      >
        <Typography variant="h4">Resumen de compra</Typography>
        <Typography variant="h6">Subtotal: ${total} </Typography>
        <Typography variant="h6">
          {descuento > 0
            ? `Descuento  "${cupon}": $${descuento}`
            : "Sin descuento"}
        </Typography>
        <Typography variant="h5">
          <b> Total: ${total - descuento} </b>
        </Typography>
        <Link to="/checkout">
          <Button variant="contained" size="large">
            Finalizar compra
          </Button>
        </Link>
        <Stack direction="row">
          <TextField
            size="small"
            id="outlined-controlled"
            label="Cupón de descuento"
            variant="filled"
            onBlur={(event) => {
              setCupon(event.target.value)
            }}
            sx={{
              backgroundColor: colorCupon,
            }}
          />
          <Button size="small" variant="contained" onClick={aplicarCupon}>
            Aplicar cupón
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
