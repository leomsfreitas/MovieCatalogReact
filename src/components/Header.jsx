import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="py-4 text-center shadow mb-4">
      <h1 className="fs-2 fw-bold mb-4">Catálogo de Filmes</h1>
      <nav className="d-flex justify-content-center gap-4 fs-6 fw-semibold">
        <Link to="/" className="text-dark text-decoration-none px-2">Início</Link>
        <Link to="/criar" className="text-dark text-decoration-none px-2">Criar</Link>
        <Link to="/alterar" className="text-dark text-decoration-none px-2">Alterar</Link>
        <Link to="/apagar" className="text-dark text-decoration-none px-2">Apagar</Link>
      </nav>
    </header>
  );
}

export default Header;