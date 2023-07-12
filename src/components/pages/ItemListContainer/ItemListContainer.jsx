import { useState } from "react"
import { pokemonList } from "../../../productsMock"
import { useEffect } from "react"
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import { ProductCard } from "../../common/ProductCard/ProductCard"
import { useParams } from "react-router-dom"
import { Loader } from "../../common/loader/Loader"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState("id")

  const handleChange = (event) => {
    console.log(event.target.value)
    setOrder(event.target.value)
  }
  const { typeName } = useParams()

  useEffect(() => {
    let pokemonFilter = pokemonList.filter((item) =>
      item.type.some((item) => item === typeName)
    )

    const getData = new Promise((res) => {
      setTimeout(() => {
        res(typeName ? pokemonFilter : pokemonList)
      }, 500)
    })

    getData
      .then((res) => setItems(sortItems(res)))
      .catch((err) => console.log(err))

    const sortItems = (data) => {
      const sortedData = [...data]
      if (order === "id") {
        sortedData.sort((a, b) => a.id - b.id)
      } else if (order === "name") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title))
      } else if (order === "price") {
        sortedData.sort((a, b) => a.price - b.price)
      }
      return sortedData
    }
  }, [typeName, order])

  if (items.length === 0) {
    return <Loader />
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Orden</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={order}
          label="Orden"
          onChange={handleChange}
        >
          <MenuItem value="id">Por ID</MenuItem>
          <MenuItem value="name">Por Nombre</MenuItem>
          <MenuItem value="price">Por Precio</MenuItem>
        </Select>
      </FormControl>
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
    </>
  )
}
