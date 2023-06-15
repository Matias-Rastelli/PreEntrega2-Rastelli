import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"

export const CartWidget = () => {
  const count = 4

  return (
    <Link to="/cart">
      <Badge badgeContent={count} color="primary">
        <ShoppingCartOutlinedIcon fontSize="large" />
      </Badge>
    </Link>
  )
}
