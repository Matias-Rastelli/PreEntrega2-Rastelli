import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Loader } from "../../common/loader/Loader"
import Swal from "sweetalert2"

export const Cart = () => {
  const { cart, deleteAll, deleteItem, totalPrice } = useContext(CartContext)

  const total = totalPrice()

  const deleteOne = (id) => {
    Swal.fire({
      title: "¿Seguro que quita este super pokémon del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Sacalo",
      cancelButtonText: "NOOOO",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id)
        Swal.fire("Ya sacamos esa cosa!", "uno menos!", "warning")
      }
    })
  }
  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro que quieres limpiar el carrito?",
      text: "¡No puedes revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, limpia todo!",
      cancelButtonText: "NOOOO",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAll()
        Swal.fire("Ya sacamos la basura!", "El carrito esta vacío", "success")
      }
    })
  }

  return (
    <div>
      <button onClick={limpiar}>ELIMINAR TODO</button>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h3> {item.quantity} </h3>
            <img src={item.img} alt="" />
            <button
              onClick={() => {
                deleteOne(item.id)
              }}
            >
              ELIMINAR
            </button>
          </div>
        )
      })}
      <h1> {total} </h1>
    </div>
  )
}
