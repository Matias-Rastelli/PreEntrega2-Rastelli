import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"
import { dataBase } from "../../../firebaseConfig"
import { collection, addDoc, updateDoc, doc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

export const Checkout = () => {
  const { cart, totalPrice, deleteAll } = useContext(CartContext)
  const [orderID, setOrderID] = useState(null)

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      const order = {
        buyer: data,
        items: cart,
        total: totalPrice(),
      }
      const orderCollection = collection(dataBase, "orders")
      addDoc(orderCollection, order).then((res) => setOrderID(res.id))

      cart.forEach((item) => {
        updateDoc(doc(dataBase, "pokemonList", item.id), {
          stock: item.stock - item.quantity,
        })
      })
      deleteAll()
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required().min(3).max(15),
      email: Yup.string().required().email(),
      telefono: Yup.string().required().min(10),
    }),
  })

  if (orderID) {
    //algo para manejar los datos de la compra
    return <h1>Numero de orden: {orderID} </h1>
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="nombre"
          autoComplete="off"
          placeholder="Ej: Matias Rastelli"
          onChange={handleChange}
          error={errors.nombre ? true : false}
          helperText={errors.nombre}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          autoComplete="off"
          placeholder="ejemplo@ejemplo"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="telefono"
          autoComplete="off"
          placeholder="2615121212"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <Button type="submit" variant="outlined">
          Enviar
        </Button>
      </form>
    </div>
  )
}
