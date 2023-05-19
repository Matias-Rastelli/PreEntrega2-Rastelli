import "./cartWidget.css"
import { BsCart } from "react-icons/bs"

export const CartWidget = () => {
  return (
    <div className="cart">
      <BsCart fontSize="30px" />
      <span className="cartWidget">4</span>
    </div>
  )
}
