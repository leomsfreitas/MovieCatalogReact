import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Delete() {
  const [step, setStep] = useState('search');
  const [searchId, setSearchId] = useState('');
  const [film, setFilm] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://682e69c8746f8ca4a47cf105.mockapi.io/films/${searchId}`);
      if (res.data && res.data.id) {
        setFilm(res.data);
        setStep('confirm');
      } else {
        setStep('notfound');
      }
    } catch {
      setStep('notfound');
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://682e69c8746f8ca4a47cf105.mockapi.io/films/${searchId}`);
      navigate('/');
    } catch (err) {
      alert('Erro ao apagar!');
    }
  };

  if (step === 'search') {
    return (
      <div className=' min-vh-100 d-flex align-items-center justify-content-center'>
        <div className='w-100' style={{ maxWidth: 500 }}>
          <div className='card shadow-lg border-0 rounded-4 p-4'>
            <h3 className="mb-4 text-center fw-bold">Remover Filme</h3>
            <form onSubmit={handleSearch}>
              <div className='mb-3'>
                <label htmlFor="id" className='form-label fw-semibold'>Digite o ID do filme:</label>
                <input
                  type="text"
                  id="id"
                  className='form-control'
                  placeholder='Digite o ID'
                  value={searchId}
                  onChange={e => setSearchId(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex gap-3">
                <button type="submit" className="btn btn-dark btn w-50">Procurar</button>
                <Link to="/" className="btn btn-outline-secondary btn w-50">Cancelar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'notfound') {
    return (
      <div className=' min-vh-100 d-flex align-items-center justify-content-center'>
        <div className='w-100' style={{ maxWidth: 500 }}>
          <div className='card shadow-lg border-0 rounded-4 p-4 text-center'>
            <h3 className="mb-4 fw-bold">Filme não encontrado!</h3>
            <Link to="/" className="btn btn-dark btn w-100">Voltar</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=' min-vh-100 d-flex align-items-center justify-content-center'>
      <div className='w-100' style={{ maxWidth: 500 }}>
        <div className='card shadow-lg border-0 rounded-4 p-4'>
          <h3 className="mb-4 text-center fw-bold">Confirmar Remoção</h3>
          <div className='mb-2'><strong>Nome:</strong> {film.nome}</div>
          <div className='mb-2'><strong>Gênero:</strong> {film.genero}</div>
          <div className='mb-4'><strong>Ano:</strong> {film.ano}</div>
          <div className="d-flex gap-3">
            <button className='btn btn-danger btn w-50' onClick={handleDelete}>Apagar</button>
            <Link to="/" className="btn btn-outline-secondary btn w-50">Cancelar</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
