import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pokemonList } from "../../../productsMock"
import { Box, Container, Typography } from "@mui/material"
import { TypePokemon } from "../../common/TypePokemon/TypePokemon"

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
            Ataque: {itemSelected.stats?.atk ?? "Desconocido"}
          </Typography>
          <Typography>
            Defensa: {itemSelected.stats?.def ?? "Desconocido"}
          </Typography>
          <Typography>
            Ataque especial: {itemSelected.stats?.spatk ?? "Desconocido"}
          </Typography>
          <Typography>
            Defensa especial: {itemSelected.stats?.spdef ?? "Desconocido"}
          </Typography>
          <Typography>
            Velocidad: {itemSelected.stats?.spd ?? "Desconocido"}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
