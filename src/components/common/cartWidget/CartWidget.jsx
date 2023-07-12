import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import { useContext } from "react"

export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext)
  const counter = getTotalItems()

  return (
    <Link to="/cart">
      <Badge badgeContent={counter} color="primary" showZero>
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Badge>
    </Link>
  )
}
