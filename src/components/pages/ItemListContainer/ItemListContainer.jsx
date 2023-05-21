import { Typography } from "@mui/material"

export const ItemListContainer = (props) => {
  return (
    <Typography variant="h3" component="h3" align="center">
      {props.greeting}
    </Typography>
  )
}
