import { NavBar } from "./components/layout/NavBar/NavBar"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a mi página, aquí debería ir mi item list container" />
    </>
  )
}

export default App
