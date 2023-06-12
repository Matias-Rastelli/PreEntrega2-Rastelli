import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material"

import { TypePokemon } from "../TypePokemon/TypePokemon"
import { useState } from "react"
import { Link } from "react-router-dom"

export const ProductCard = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <Card
      sx={{
        width: 300,
        height: 510,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt={item.title}
        image={item.img}
        sx={{
          height: 250,
          padding: 2,
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography variant="h4" component="h4">
          {item.title}
        </Typography>
        <TypePokemon type={item.type} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxHeight: "100px", minHeight: "100px" }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          variant="contained"
          color="success"
          size="large"
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
