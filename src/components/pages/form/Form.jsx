import { Button, TextField } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from "yup"

export const Form = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    onSubmit: (data) => {
      console.log("formulario enviado: ", data)
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string().required().min(3).max(15),
      email: Yup.string().required().email(),
      telefono: Yup.number().required().positive().integer(),
    }),
  })

  console.log(errors)

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
