import { useState } from "react"
import { useEffect } from "react"
import { ProductCard } from "../../common/ProductCard/ProductCard"
import { useParams } from "react-router-dom"
import { Loader } from "../../common/loader/Loader"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"
import ClearIcon from "@mui/icons-material/Clear"
import { dataBase } from "../../../firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import {
  Box,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
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
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: "5px",
          gap: "50px",
          backgroundColor: "#8080804d",
          width: "600px",
          justifyContent: "space-between",
          padding: "5px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={order}
            onChange={handleChange}
          >
            <MenuItem value="id">Por ID</MenuItem>
            <MenuItem value="name">Por Nombre</MenuItem>
            <MenuItem value="price">Por Precio</MenuItem>
          </TextField>
          <Checkbox
            aria-label={isAscending ? "Ascendente" : "Descendente"}
            icon={<KeyboardDoubleArrowUpIcon />}
            checkedIcon={<KeyboardDoubleArrowDownIcon />}
            onChange={handleChangeCheck}
            checked={checked}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "",
            padding: "5px",
          }}
        >
          <TextField
            label="Buscar por nombre"
            variant="outlined"
            value={filterByName}
            onChange={(event) => {
              setFilterByName(event.target.value.toLowerCase())
            }}
          />
          <IconButton aria-label="delete" onClick={() => setFilterByName("")}>
            <ClearIcon />
          </IconButton>
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
