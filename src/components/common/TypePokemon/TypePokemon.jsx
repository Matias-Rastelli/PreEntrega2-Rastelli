// import { Chip } from "@mui/material"
import "./TypePokemon.css"

export const TypePokemon = ({ type }) => {
  return (
    <div>
      {type?.map((element, i) => {
        return (
          <div key={i} className={"chipPropio " + element}>
            <span> {element.toUpperCase()} </span>
          </div>
        )
      })}
    </div>
  )
}

/*
{category.map((element, i) => {
        return (
          <Chip
            className={element}
            key={i}
            label={element}
            sx={{ userSelect: "none" }}
          />
        )
      })}
*/
