import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pokemonList } from "../../../productsMock"
import { Box, Container, Typography } from "@mui/material"
import { TypePokemon } from "../../common/TypePokemon/TypePokemon"
import { ItemCount } from "../../common/Count/ItemCount"
import { CartContext } from "../../../context/CartContext"
import { Loader } from "../../common/loader/Loader"

export const ProductDetail = () => {
  const [itemSelected, setItemSelect] = useState({})

  const { id } = useParams()
  const { addToCart, getTotalByID } = useContext(CartContext)

  const cantidad = getTotalByID(id)

  useEffect(() => {
    let itemFind = pokemonList.find((item) => item.id === +id)

    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(itemFind)
      }, 500)
    })

    getProduct
      .then((res) => setItemSelect(res))
      .catch((err) => console.log(err))
  }, [id])

  const onAdd = (cantidad) => {
    let data = {
      ...itemSelected,
      quantity: cantidad,
    }
    addToCart(data)
  }
  if (!itemSelected.price) {
    return <Loader />
  }
  return (
    <Container sx={{ display: "flex", flexDirection: "row" }}>
      <Box>
        <img src={itemSelected.img} alt={itemSelected.title} />
      </Box>
      <Box>
        <Typography variant="h2" component="h2" align="center">
          {itemSelected.title}
        </Typography>
        <TypePokemon type={itemSelected.type} font="14px" />
        <Typography>{itemSelected.description}</Typography>
        <Box>
          <Typography variant="h6" component="h6">
            Caracteristicas
          </Typography>
          <Typography>HP: {itemSelected.stats?.hp ?? "Desconocido"}</Typography>
          <Typography>
            Ataque: {itemSelected.stats?.attack ?? "Desconocido"}
          </Typography>
          <Typography>
            Defensa: {itemSelected.stats?.defense ?? "Desconocido"}
          </Typography>
          <Typography>
            Ataque especial:{" "}
            {itemSelected.stats?.["special-attack"] ?? "Desconocido"}
          </Typography>
          <Typography>
            Defensa especial:{" "}
            {itemSelected.stats?.["special-defense"] ?? "Desconocido"}
          </Typography>
          <Typography>
            Velocidad: {itemSelected.stats?.speed ?? "Desconocido"}
          </Typography>
        </Box>
        {itemSelected.stock > 0 ? (
          <ItemCount
            stock={itemSelected.stock}
            initial={cantidad}
            onAdd={onAdd}
          />
        ) : (
          <Typography variant="h5">Sin stock disponible</Typography>
        )}
      </Box>
    </Container>
  )
}
