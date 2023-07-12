import { Box, Button, Chip, IconButton } from "@mui/material"
import { useCount } from "../../hooks/useCount"
import RemoveCircleOutlineSharpIcon from "@mui/icons-material/RemoveCircleOutlineSharp"
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp"

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock)

  return (
    <Box sx={{}}>
      <Box
        componenet="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: "8px",
          }}
        >
          <IconButton variant="outlined" color="primary" onClick={decrement}>
            <RemoveCircleOutlineSharpIcon />
          </IconButton>
          <Chip
            label={count}
            variant="contained"
            color="info"
            sx={{ padding: "2px 10px", margin: "5px" }}
          />
          <IconButton variant="outlined" color="primary" onClick={increment}>
            <AddCircleOutlineSharpIcon />
          </IconButton>
        </Box>
        <Button variant="contained" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </Box>
    </Box>
  )
}
