import { Button } from "@mui/material"
import { pokemonList } from "../../../productsMock"
import { addDoc, collection } from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig"

export const BotonRelleno = () => {
  // const itemsCollection = collection(dataBase, "pokemonList")
  // const rellenar = () => {
  //   pokemonList.forEach((item) => {
  //     addDoc(itemsCollection, item).then((res) => console.log(res))
  //   })
  // }

  return (
    <div>
      <Button onClick={rellenar}>Rellenar productos</Button>
    </div>
  )
}
