import { Navbar } from "./components/layout/navBar/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer"

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a mi página, aquí debería ir mi item list container" />
    </>
  )
}

export default App
