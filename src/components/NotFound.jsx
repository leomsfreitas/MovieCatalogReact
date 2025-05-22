import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">Ops! Página não encontrada.</p>
        <p className="lead">A página que você está procurando não existe.</p>
        <Link to="/" className="btn btn-dark btn">Voltar para o Início</Link>
      </div>
    </div>
  );
}

export default NotFound;