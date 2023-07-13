import { useState } from "react"
import { pokemonList } from "../../../productsMock"
import { useEffect } from "react"
import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"
import { ProductCard } from "../../common/ProductCard/ProductCard"
import { useParams } from "react-router-dom"
import { Loader } from "../../common/loader/Loader"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  const [order, setOrder] = useState("id")
  const [isAscending, setIsAscending] = useState(false)
  const [filterByName, setFilterByName] = useState("")

  const handleChange = (event) => {
    setOrder(event.target.value)
    setIsAscending(false)
  }
  const handleChangeCheck = () => {
    setIsAscending(!isAscending)
  }
  const checked = isAscending
  const { typeName } = useParams()

  useEffect(() => {
    const pokemonFilter = pokemonList.filter((item) =>
      item.type.some((item) => item === typeName)
    )

    const nameFiltered = (list) => {
      const newList = list.filter((item) =>
        item.title.toLowerCase().includes(filterByName)
      )
      console.log(newList)
      return newList
    }

    const getData = new Promise((res) => {
      setTimeout(() => {
        const list = typeName ? pokemonFilter : pokemonList
        const filteredList = nameFiltered(list)
        res(filteredList.length === 0 ? list : filteredList)
      }, 500)
    })

    getData
      .then((res) => setItems(sortItems(res)))
      .catch((err) => console.log(err))

    const sortItems = (data) => {
      let sortedData = [...data]
      if (order === "id") {
        sortedData.sort((a, b) => a.id - b.id)
      } else if (order === "name") {
        sortedData.sort((a, b) => a.title.localeCompare(b.title))
      } else if (order === "price") {
        sortedData.sort((a, b) => a.price - b.price)
      }
      if (isAscending) {
        sortedData = sortedData.reverse()
      }
      return sortedData
    }
  }, [typeName, order, isAscending, filterByName])

  if (items.length === 0) {
    return <Loader />
  }

  return (
    <>
      <FormControl
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          gap: "50px",
        }}
      >
        <Box>
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
          <Checkbox
            aria-label={isAscending ? "Ascendente" : "Descendente"}
            icon={<KeyboardDoubleArrowUpIcon />}
            checkedIcon={<KeyboardDoubleArrowDownIcon />}
            onChange={handleChangeCheck}
            checked={checked}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <TextField
            label="Buscar por nombre"
            variant="outlined"
            onChange={(event) => {
              setFilterByName(event.target.value.toLowerCase())
            }}
          />
        </Box>
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
