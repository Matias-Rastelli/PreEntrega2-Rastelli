import { useState } from "react"
import { pokemonList } from "../../../productsMock"
import { useEffect } from "react"
import { Box } from "@mui/material"
import { ProductCard } from "../../common/ProductCard/ProductCard"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])

  const { typeName } = useParams()

  useEffect(() => {
    let pokemonFilter = pokemonList.filter((item) =>
      item.type.some((item) => item === typeName)
    )

    const getData = new Promise((res) => {
      res(typeName ? pokemonFilter : pokemonList)
    })
    getData.then((res) => setItems(res)).catch((err) => console.log(err))
  }, [typeName])

  return (
    <Box
      componnet="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "95vw",
        flexWrap: "wrap",
        gap: "5px",
        margin: "5px",
      }}
    >
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />
      })}
    </Box>
  )
}
