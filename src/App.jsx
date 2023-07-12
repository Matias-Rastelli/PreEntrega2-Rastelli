import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/layout/NavBar/NavBar"
import { menuRoutes } from "./routes/routes"
import CartContextProvider from "./context/CartContext"

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route element={<NavBar />}>
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
