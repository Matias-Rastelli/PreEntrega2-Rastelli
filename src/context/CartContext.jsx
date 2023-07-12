import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  const addToCart = (newProduct) => {
    const exist = itemExist(newProduct.id)

    if (exist) {
      const newCart = cart.map((item) => {
        if (item.id === newProduct.id) {
          return {
            ...item,
            quantity: item.quantity + newProduct.quantity,
          }
        } else {
          return item
        }
      })
      setCart(newCart)
      localStorage.setItem("cart", JSON.stringify(newCart))
    } else {
      setCart([...cart, newProduct])
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]))
    }
  }

  const itemExist = (id) => {
    let exist = cart.some((item) => item.id === id)
    return exist
  }
  const deleteAll = () => {
    setCart([])
    localStorage.removeItem("cart")
  }
  const deleteItem = (id) => {
    const filterCart = cart.filter((item) => item.id !== id)
    setCart(filterCart)

    if (filterCart.length === 0) {
      localStorage.removeItem("cart")
    } else {
      localStorage.setItem("cart", JSON.stringify(filterCart))
    }
  }
  const getTotalByID = (id) => {
    const item = cart.find((item) => item.id == id)
    return item?.quantity
  }
  const getTotalItems = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
    return total
  }
  const totalPrice = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
    return total
  }

  const data = {
    cart,
    addToCart,
    deleteAll,
    deleteItem,
    getTotalByID,
    getTotalItems,
    totalPrice,
  }

  return <CartContext.Provider value={data}> {children} </CartContext.Provider>
}

export default CartContextProvider
