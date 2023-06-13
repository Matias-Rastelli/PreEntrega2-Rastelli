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

  const colorMap = {
    acero: "#A8A8C0",
    agua: "#3899F8",
    bicho: "#A8B820",
    dragon: "#7860E0",
    electrico: "#F8D030",
    fantasma: "#6060B0",
    fuego: "#F05030",
    hada: "#E79FE7",
    hielo: "#58C8E0",
    lucha: "#A05038",
    normal: "#A8A090",
    planta: "#78C850",
    psiquico: "#F870A0",
    roca: "#B8A058",
    siniestro: "#7A5848",
    tierra: "#E9D6A4",
    veneno: "#B058A0",
    volador: "#98A8F0",
  }

  function color(type) {
    const color1 = colorMap[type[0]]
    const color2 = colorMap[type[1]]
    if (type.length > 1) {
      return `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`
    }
    return `radial-gradient(circle, rgba(255,255,255,0.5) 0%, ${color1} 100%);`
  }

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
        <TypePokemon type={item.type} />
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
