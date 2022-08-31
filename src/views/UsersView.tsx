//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// h1 de título  data-testid="users__title"
// table con el contenido de la lista de usuarios   data-testid="users__table"
// Etiquetas de imagen con el avatar de cada usuario  data-testid=“user__img-" concatenado con el id de cada usuario.
// botón que redirecciona a la vista de crear nuevo usuario  data-testid="users__btn-create"
// un botón por cada página con el número de la página como texto data-testid="users__btn-page-" concatenado con el número de la página
import axios from "axios";
import { useEffect, useState } from "react";
import { withPrincipal } from "../shared/principal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faImage } from "@fortawesome/free-solid-svg-icons";
import "./styles/grid.css";
import "./styles/styles.css";
import "./styles/table.css";
import { DeleteUser } from "../services/services";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const UserView = () => {
  const [numberPage, setNumberPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataUsers, setDataUsers] = useState<any[]>([]);
  const listUsers = () => {
    axios
      .get(`https://reqres.in/api/users?page=${currentPage}`)
      .then((response) => {
        setNumberPage(response.data.total_pages);
        setDataUsers(response.data.data);
      })
      .catch((error) => {
        alert("Error en redireccionar los usuarios");
      });
  };
  const deleteUser = (id: any) => {
    DeleteUser(id);
  };

  useEffect(() => {
    listUsers();
  }, [currentPage]);

  return (
    <>
      <div className="container">
        <div className="row" data-testid="users__table">
          <div className="col">
            <h2 className="form-title" data-testid="users__title">Lista de Usuarios</h2>
            <table data-testid="users__table" className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Imagen</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {dataUsers.length > 0 &&
                  dataUsers?.map((user, index) => {
                    return (
                      <>
                        <tr>
                          <td className="text-center" key={user?.id}>
                            {user?.id}
                          </td>
                          <td className="text-center" key={user?.first_name}>
                            {user?.first_name}
                          </td>
                          <td className="text-center" key={user?.email}>
                            {user?.email}
                          </td>
                          <td className="text-center" key={user?.avatar}>
                            {" "}
                            <a
                              href={user?.avatar}
                              className="link-image-pokemon"
                              target="_blank"
                              data-testid={`user__img-${index+1}`}
                            >
                              <FontAwesomeIcon icon={faImage} />
                            </a>
                          </td>
                          <td className="text-center" key={index}>
                            <button
                              className="btn btn-table"
                              onClick={() => deleteUser(user?.id)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <div className="pagination">
          {numberPage > 0 && (
            <Pagination
              nPages={numberPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
      <Link to="/crear" className="btn-float" data-testid="users__btn-create">
        <p className="span-float">+</p>
      </Link>
    </>
  );
};

export default withPrincipal(UserView);
