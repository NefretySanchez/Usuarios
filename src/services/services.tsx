import axios from "axios";

export const LoginUser = (data: any) => {
  axios
    .post("https://reqres.in/api/login", data)
    .then((response) => {
      if (response.data) {
        localStorage.setItem("token", response.data.token);
        alert("Sesion iniciada");
        window.location.assign("/usuarios")
      }
    })
    .catch((error) => {
      if (error) {
        alert("Error al ingresar, valide los datos");
      }
    });
};

export const DeleteUser = (data: any) => {
  axios
    .delete(`https://reqres.in/api/users/${data}`)
    .then((response) => {
      if (response) {
        alert("Usuario Eliminado");
        window.location.reload();
      }
    })
    .catch((error) => {
      alert("Error en eliminacion");
    });
};


export const CreateUser = (data: any) => {
    axios
      .post("https://reqres.in/api/users", data)
      .then((response) => {
        if (response.data) {
          alert("Usuario creado");
          window.location.assign("/usuarios")
        }
      })
      .catch((error) => {
        if (error) {
          alert("Error al crear los usuarios, valide los datos");
        }
      });
  };
