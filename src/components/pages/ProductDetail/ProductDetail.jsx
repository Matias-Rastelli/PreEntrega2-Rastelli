/*
{
    id: 53,
    title: "Mew",
    price: 40000,
    stock: 6,
    description:
      "Mew es un Pokémon mítico de tipo Psíquico. Se cree que posee el ADN de todos los Pokémon y es capaz de aprender cualquier movimiento. Es extremadamente raro de encontrar y tiene la habilidad de volverse invisible.",
    type: ["Psíquico"],
    img: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
  }
  */

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { pokemonList } from "../../../productsMock"

export const ProductDetail = () => {
  const [itemSelected, setItemSelect] = useState({})

  const { id } = useParams()

  useEffect(() => {
    let itemFind = pokemonList.find((item) => item.id === +id)

    const getProduct = new Promise((res) => {
      res(itemFind)
    })

    getProduct
      .then((res) => setItemSelect(res))
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div>
      <h1>{itemSelected.title} </h1>
      <img src={itemSelected.img} alt="" />
      <p>{itemSelected.description} </p>
      <p>${itemSelected.price} </p>
    </div>
  )
}
