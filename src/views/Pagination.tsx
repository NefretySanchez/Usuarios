interface PaginationInterface {
  nPages: any;
  currentPage: any;
  setCurrentPage: any;
}

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}: PaginationInterface) => {
  const pageNumbers = Array.from(Array(nPages).keys());

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage}>
            Anterior
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${
              currentPage == pgNumber + 1 ? "active" : ""
            } `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              data-testid={`users__btn-page-${pgNumber + 1}`}
              className="page-link"
            >
              {pgNumber + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage}>
            Siguiente
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
