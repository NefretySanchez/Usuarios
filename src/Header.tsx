//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// elemento de redirección a ingreso data-testid="header__link-login"
// elemento de redirección a usuarios data-testid="header__link-users"
// elemento de redirección a Crear data-testid="header__link-create"
// elemento para cerrar sesión data-testid="header__link-signout"
import { Link } from "react-router-dom";
import "./views/styles/header.css";
const Header = () => {
  const removeDataUser = () => {
    localStorage.removeItem("token");
    window.location.assign("/")
  };
  return (
    <>
      <div>
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper">
          <ul>
            <li>
              <Link data-testid="header__link-login" to="/ingreso">
                Ingreso
              </Link>
            </li>
            <li>
              <Link data-testid="header__link-users" to="/usuarios">
                Usuarios
              </Link>
            </li>
            <li>
              <Link data-testid="header__link-create" to="/crear">
                Crear
              </Link>
            </li>
            <li>
              <Link
                onClick={removeDataUser}
                data-testid="header__link-signout"
                to="/ingreso"
              >
                Cerrar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
