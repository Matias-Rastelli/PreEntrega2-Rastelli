import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

export const CardProduct = ({ item }) => {
  return (
    <Card
      sx={{
        width: 300,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        alt={item.id}
        image={item.img}
        sx={{
          height: 140,
          padding: 2,
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.tittle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large">Agregar al Carrito</Button>
      </CardActions>
    </Card>
  )
}
