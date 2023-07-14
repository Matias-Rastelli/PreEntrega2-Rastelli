import { BrowserRouter, Route, Routes } from "react-router-dom"
import { menuRoutes } from "./routes/routes"
import CartContextProvider from "./context/CartContext"
import { Main } from "./components/layout/Main/Main"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<Main />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>

          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
