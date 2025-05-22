import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://682e69c8746f8ca4a47cf105.mockapi.io/films')
      .then((res) => {
        setFilmes(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert('Erro ao carregar os filmes.');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center mt-5">Carregando...</div>;
  }

  return (
    <div className="min-vh-100">
      <Header />
      <div className="container" style={{ marginTop: '180px' }}>
        <div className="row justify-content-center">
          {filmes.length === 0 ? (
            <p className="text-center mt-5">Nenhum filme encontrado.</p>
          ) : (
            filmes.map((filme) => (
              <div key={filme.id} className="col-12 col-md-8 col-lg-6 mb-3">
                <Link
                  to={`/ler/${filme.id}`}
                  className="text-decoration-none"
                  style={{ display: 'block' }}
                >
                  <div
                    className="card shadow-lg border-0 rounded-4 filme-card-hover"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="card-body d-flex align-items-center">
                      <span className="me-4">
                        <strong>Id:</strong> {filme.id}
                      </span>
                      <span>
                        <strong>Nome:</strong> {filme.nome}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
