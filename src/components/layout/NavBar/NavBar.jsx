import "./navBar.css"

import { CartWidget } from "../../common/cartWidget/CartWidget"

export const Navbar = () => {
  return (
    <nav>
      <div>
        <h1>Nombre Marca</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Categoria 1</a>
          </li>
          <li>
            <a href="">Categoria 2</a>
          </li>
          <li>
            <a href="">Categoria 3</a>
          </li>
          <li>
            <a href="">Categoria 4</a>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  )
}
