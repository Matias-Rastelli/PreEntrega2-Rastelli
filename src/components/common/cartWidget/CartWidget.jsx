import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Badge } from "@mui/material"

export const CartWidget = () => {
  const count = 4

  return (
    <Badge badgeContent={count} color="primary">
      <ShoppingCartOutlinedIcon fontSize="large" />
    </Badge>
  )
}
