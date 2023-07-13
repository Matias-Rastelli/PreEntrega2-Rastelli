import { useState } from "react"
import { useEffect } from "react"
import { ProductCard } from "../../common/ProductCard/ProductCard"
import { useParams } from "react-router-dom"
import { Loader } from "../../common/loader/Loader"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"
import { dataBase } from "../../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material"

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
    const itemsCollection = collection(dataBase, "pokemonList")
    let consulta

    if (!typeName) {
      consulta = itemsCollection
    } else {
      consulta = query(
        itemsCollection,
        where("type", "array-contains", typeName)
      )
    }

    const nameFiltered = (list) => {
      const newList = list.filter((item) =>
        item.title.toLowerCase().includes(filterByName)
      )
      return newList
    }

    const sortItems = (data) => {
      let sortedData = [...data]
      if (order === "id") {
        sortedData.sort((a, b) => a.pokedexN - b.pokedexN)
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

    getDocs(consulta)
      .then((res) => {
        const pokemonList = res.docs.map((item) => {
          return {
            ...item.data(),
            id: item.id,
          }
        })
        const filteredList = nameFiltered(pokemonList)
        const finalList = filteredList.length === 0 ? pokemonList : filteredList
        setItems(sortItems(finalList))
      })
      .catch((err) => console.log(err))
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
            value={filterByName}
            onChange={(event) => {
              setFilterByName(event.target.value.toLowerCase())
            }}
          />
          <Button variant="outlined" onClick={() => setFilterByName("")}>
            X
          </Button>
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
