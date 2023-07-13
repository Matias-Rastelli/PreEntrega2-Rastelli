import { ItemListContainer } from "../components/pages/ItemListContainer/ItemListContainer"
import { ProductDetail } from "../components/pages/ProductDetail/ProductDetail"
import { Cart } from "../components/pages/cart/Cart"
import { Checkout } from "../components/pages/checkout/checkout"

export const menuRoutes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/type/:typeName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: Cart,
  },
  {
    id: "productDetail",
    path: "/itemDetail/:id",
    Element: ProductDetail,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: Checkout,
  },
]
