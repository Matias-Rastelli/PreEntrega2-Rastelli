import { Chip } from "@mui/material"
import "./TypePokemon.css"
import { colorMap } from "../../../colorMap"
import { Link } from "react-router-dom"

const typeColor = (type) => {
  const color = colorMap[type]
  return color
}

const handleClick = () => {}

export const TypePokemon = ({ type, font }) => {
  return (
    <div>
      {type?.map((element, i) => {
        return (
          <Link key={i} to={`/type/${element}`}>
            <Chip
              label={element.toUpperCase()}
              size="small"
              clickable="true"
              sx={{
                userSelect: "none",
                backgroundColor: typeColor(element),
                fontSize: font,
              }}
            />
          </Link>
        )
      })}
    </div>
  )
}
