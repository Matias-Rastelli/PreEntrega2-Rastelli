import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/layout/NavBar/NavBar"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"
import { Cart } from "./components/pages/cart/Cart"
import { ProductDetail } from "./components/pages/ProductDetail/ProductDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/type/:typeName" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ProductDetail />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
