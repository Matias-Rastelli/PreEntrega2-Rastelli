import { useState } from "react"
import { products } from "../../../productsMock"
import { useEffect } from "react"
import { CardProduct } from "../../common/CardProduct/ProductCard"
import { Box } from "@mui/material"

export const ItemListContainer = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getData = new Promise((res) => {
      res(products)
    })
    getData.then((res) => setItems(res)).catch((err) => console.log(err))
  }, [])

  console.log(items)
  return (
    <Box
      componnet="div"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90vw",
        flexWrap: "wrap",
        gap: "5px",
        margin: "5px",
      }}
    >
      {items.map((item) => {
        return <CardProduct key={item.id} item={item} />
      })}
    </Box>
  )
}
