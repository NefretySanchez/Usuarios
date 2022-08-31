//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:
//h1 de título="create__title"
// Input de nombre=“create__name”
// Input de trabajo=“create__job”
// Span que alerta con notificaciones=“alert__text”
// Botón para crear= “create__btn”
import "./styles/grid.css";
import "./styles/styles.css";
import "./styles/form.css";
import { withPrincipal } from "../shared/principal";
import { CreateUser } from "../services/services";
import { useState } from "react";

const CreateUserView = () => {
  const [email, setEmail] = useState("");
  const [name_user, setNameUser] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const onSubmitCreate = (e: any) => {
    e.persist();
    const data = {
      name: name_user,
      email: email,
      job: job,
      image: image,
    };
    CreateUser(data);
    e.preventDefault();
  };
  const onChangeEmail = (e: any) => {
    e.persist();
    setEmail(e.target.value);
  };
  const onChangeName = (e: any) => {
    e.persist();
    setNameUser(e.target.value);
  };
  const onChangeJob = (e: any) => {
    e.persist();
    setJob(e.target.value);
  };
  const onChangeImage = (e: any) => {
    e.persist();
    setImage(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h2
                className="form-title text-center"
                data-testid="create__title"
              >
                Crear Usuario
              </h2>
              <form onSubmit={onSubmitCreate}>
                <div className="form-group ml-20">
                  <label htmlFor="">Nombre </label>
                  <input
                    data-testid="create__name"
                    type="text"
                    name="name_user"
                    onChange={onChangeName}
                    value={name_user}
                    required
                  />
                </div>

                <div className="form-group ml-20">
                  <label htmlFor="">Correo </label>
                  <input
                    data-testid="login__password"
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                  />
                </div>
                <div className="form-group ml-20">
                  <label htmlFor="">Trabajo </label>
                  <input
                    data-testid="login__password"
                    type="text"
                    name="job"
                    value={job}
                    onChange={onChangeJob}
                    required
                  />
                </div>
                <div className="form-group ml-20">
                  <label htmlFor="">Imagen </label>
                  <input
                    data-testid="login__password"
                    type="url"
                    name="image"
                    value={image}
                    onChange={onChangeImage}
                    required
                  />
                </div>
                <div className="form-group ml-20">
                  <button
                    className="btn btn-primary"
                    data-testid="create__btn"
                    type="submit"
                  >
                    Crear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withPrincipal(CreateUserView);
