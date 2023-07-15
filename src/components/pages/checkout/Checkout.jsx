import { Box, Button, TextField, Typography } from "@mui/material"
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
      repeatEmail: "",
      telefono: "",
    },
    onSubmit: (data) => {
      const order = {
        buyer: data,
        items: cart,
        total: totalPrice(),
        date: new Date().toLocaleString(),
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
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Mínimo 3 caractéres")
        .max(30, "Máximo 30 caracteres"),
      email: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debe ser un email válido"),
      repeatEmail: Yup.string()
        .required("Este campo es obligatorio")
        .email("Debe ser un email válido")
        .oneOf([Yup.ref("email")], "Los email deben ser iguales"),
      telefono: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "Minimo 10 caractéres"),
    }),
  })

  if (orderID) {
    return (
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "300px",
            border: "1px solid black",
          }}
        >
          <Typography variant="h4">Gracias por tu compra</Typography>
          <Typography variant="h6"> Este es tu código de orden: </Typography>
          <Typography variant="h3"> {orderID}</Typography>
          <Typography variant="h6">
            Con el podés consultar por el estado de tu pedido.
          </Typography>
        </Box>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Typography variant="h4">
        Ingrese sus datos para completar la compra:
      </Typography>
      <Box
        sx={{
          width: "600px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <TextField
            label="Nombre y Apellido"
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
            label="Repeat Email"
            variant="outlined"
            name="repeatEmail"
            autoComplete="off"
            placeholder="ejemplo@ejemplo"
            onChange={handleChange}
            error={errors.repeatEmail ? true : false}
            helperText={errors.repeatEmail}
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
          <Button
            type="submit"
            variant="contained"
            sx={{ width: "200px", alignSelf: "flex-end" }}
          >
            Realizar Compra
          </Button>
        </form>
      </Box>
    </Box>
  )
}
