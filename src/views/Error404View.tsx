//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:
//h1 de título="error404__title"
import { withPrincipal } from "../shared/principal";
import "./styles/grid.css";
import "./styles/styles.css";

const ErrorView = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h1 className="title-not-found">404</h1>
          <p data-testid="error404__title" className="paragraph-not-found">
            No encontramos esta página
          </p>
        </div>
      </div>
    </>
  );
};

export default withPrincipal(ErrorView);
