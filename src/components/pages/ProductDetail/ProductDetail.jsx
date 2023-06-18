import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pokemonList } from "../../../productsMock"
import { Box, Container, Typography } from "@mui/material"
import { TypePokemon } from "../../common/TypePokemon/TypePokemon"
import { ItemCount } from "../../common/Count/ItemCount"

export const ProductDetail = () => {
  const [itemSelected, setItemSelect] = useState({})

  const { id } = useParams()

  useEffect(() => {
    let itemFind = pokemonList.find((item) => item.id === +id)

    const getProduct = new Promise((res) => {
      res(itemFind)
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

    console.log(data)
  }
  //solo el pokemon de ID:53 tiene las estadisticas puestas, para la nueva base de datos van a estar todos completos}
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
          <ItemCount stock={itemSelected.stock} initial={1} onAdd={onAdd} />
        ) : (
          <Typography variant="h5">Sin stock disponible</Typography>
        )}
      </Box>
    </Container>
  )
}
