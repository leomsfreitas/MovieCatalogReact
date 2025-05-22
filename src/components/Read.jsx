import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Read() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://682e69c8746f8ca4a47cf105.mockapi.io/films/${id}`)
      .then(res => {
        setFilme(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        alert('Erro ao carregar os detalhes do filme.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center mt-5">Carregando...</div>;

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <div className="w-100" style={{ maxWidth: 500 }}>
        <div className="card shadow-lg border-0 rounded-4 p-4">
          <h3 className="mb-4 text-center fw-bold">Detalhes do Filme</h3>
          <p><strong>ID:</strong> {filme.id}</p>
          <p><strong>Nome:</strong> {filme.nome}</p>
          <p><strong>Gênero:</strong> {filme.genero}</p>
          <p><strong>Ano:</strong> {filme.ano}</p>
          <div className="d-flex gap-3 mt-4">
            <Link to="/" className="btn btn-dark btn w-100">Voltar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
