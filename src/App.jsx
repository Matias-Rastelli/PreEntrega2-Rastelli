import { BrowserRouter, Route, Routes } from "react-router-dom"
import { menuRoutes } from "./routes/routes"
import CartContextProvider from "./context/CartContext"
import { Main } from "./components/layout/Main/Main"
import { NotFound } from "./components/pages/notFound/NotFound"

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

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
