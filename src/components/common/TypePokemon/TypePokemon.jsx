import { Chip } from "@mui/material"
import "./TypePokemon.css"
import { colorMap } from "../../../colorMap"
import { Link } from "react-router-dom"

const typeColor = (type) => {
  const color = colorMap[type]
  return color
}

export const TypePokemon = ({ type, font }) => {
  return (
    <div>
      {type?.map((element, i) => {
        return (
          <Link key={i} to={`/type/${element}`}>
            <Chip
              key={i}
              label={element.toUpperCase()}
              size="small"
              clickable={true}
              sx={{
                userSelect: "none",
                backgroundColor: typeColor(element),
                border: `1px solid ${typeColor(element)}`,
                fontSize: font,
                boxSizing: "border-box",
                "&:hover": {
                  backgroundColor: typeColor(element),
                  border: "1px black solid",
                },
              }}
            />
          </Link>
        )
      })}
    </div>
  )
}
