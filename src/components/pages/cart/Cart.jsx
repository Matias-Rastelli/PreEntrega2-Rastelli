import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import Swal from "sweetalert2"
import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"

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
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h3> {item.quantity} </h3>
            <img src={item.img} alt="" />
            <button
              onClick={() => {
                deleteOne(item.id)
              }}
            >
              ELIMINAR
            </button>
          </div>
        )
      })}
      <h1> {total} </h1>
    </div>
  )
}
