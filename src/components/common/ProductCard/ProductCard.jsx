import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"

import { TypePokemon } from "../TypePokemon/TypePokemon"
import { useState } from "react"
import { Link } from "react-router-dom"
import { colorMap } from "../../../colorMap"

export const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  function color(type) {
    const color1 = colorMap[type[0]]
    const color2 = colorMap[type[1]]
    if (type.length > 1) {
      return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`
    }
    return `radial-gradient(circle, rgba(255,255,255,0.5) 0%, ${color1} 100%);`
  }

  const Carrito = <AddShoppingCartIcon />

  return (
    <Card
      sx={{
        width: 220,
        height: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: color(item.type),
      }}
    >
      <CardMedia
        component="img"
        alt={item.title}
        image={item.img}
        sx={{
          height: 150,
          objectFit: "contain",
        }}
      />
      <CardContent sx={{ padding: "1px 10px" }}>
        <Typography variant="h6" component="h6">
          {item.title}
        </Typography>
        <TypePokemon type={item.type} font="10px" />
        <Typography
          variant="body2"
          color="text.secondary"
          component="p"
          sx={{
            maxHeight: "60px",
            minHeight: "60px",
            fontSize: "10px",
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          endIcon={isHovered ? null : <AddShoppingCartIcon />}
          variant="contained"
          color="success"
          size="small"
          sx={{
            width: "100%",
            transition: "0.3s",
          }}
        >
          <Link to={`/itemDetail/${item.id}`}>
            {isHovered ? "Ir a detalles" : `$${item.price}`}
          </Link>
        </Button>
      </CardActions>
    </Card>
  )
}
