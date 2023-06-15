import { Chip } from "@mui/material"
import "./TypePokemon.css"
import { colorMap } from "../../../colorMap"

const typeColor = (type) => {
  const color = colorMap[type]
  return color
}

export const TypePokemon = ({ type, font }) => {
  return (
    <div>
      {type?.map((element, i) => {
        return (
          <Chip
            key={i}
            label={element.toUpperCase()}
            size="small"
            sx={{
              userSelect: "none",
              backgroundColor: typeColor(element),
              fontSize: font,
            }}
          />
        )
      })}
    </div>
  )
}
