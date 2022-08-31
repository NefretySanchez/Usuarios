//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:

// h1 de título  data-testid="login__title"
// Input de email  data-testid=“login__email”
// Input de contraseña  data-testid=“login__password”
// Botón para ingresar data-testid=“login__btn-login”
// Span que alerta con notificaciones  data-testid==“alert__text”
import "./styles/grid.css";
import "./styles/styles.css";
import "./styles/form.css";
import { withPrincipal } from "../shared/principal";
import { useState } from "react";
import { LoginUser } from "../services/services";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitLogin = (e: any) => {
    e.persist();
    const data = {
      email: email,
      password: password,
    };
    LoginUser(data);
    e.preventDefault();
  };
  const onChangeEmail = (value: any) => {
    value.persist();
    setEmail(value.target.value);
  };
  const onChangePassword = (value: any) => {
    value.persist();
    setPassword(value.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h2 className="form-title text-center" data-testid="login__title">
                Bienvenido
              </h2>
              <form onSubmit={onSubmitLogin}>
                <div className="form-group ml-20">
                  <label htmlFor="">Correo </label>
                  <input
                    data-testid="login__email"
                    type="email"
                    name="email"
                    value={email}
                    required
                    onChange={onChangeEmail}
                    placeholder="ejemplo@hotmail.com"
                  />
                </div>

                <div className="form-group ml-20">
                  <label htmlFor="">Contraseña </label>
                  <input
                    data-testid="login__password"
                    type="password"
                    name="password"
                    value={password}
                    required
                    onChange={onChangePassword}
                  />
                </div>
                <div className="form-group ml-20">
                  <button
                    className="btn btn-primary"
                    data-testid="login__btn-login"
                    type="submit"
                  >
                    Ingresar
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

export default withPrincipal(LoginView);