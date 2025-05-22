import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Update() {
  const [step, setStep] = useState('search');
  const [searchId, setSearchId] = useState('');
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' });
  const navigate = useNavigate();

  const capitalizeName = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://682e69c8746f8ca4a47cf105.mockapi.io/films/${searchId}`);
      if (res.data && res.data.id) {
        setValues({ nome: res.data.nome, genero: res.data.genero, ano: res.data.ano });
        setStep('edit');
      } else {
        setStep('notfound');
      }
    } catch {
      setStep('notfound');
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    if (values.ano < 1888 || values.ano > currentYear) {
      alert(`O ano deve estar entre 1888 e ${currentYear}.`);
      return;
    }

    const formattedValues = {
      ...values,
      nome: capitalizeName(values.nome),
    };

    try {
      await axios.put(`https://682e69c8746f8ca4a47cf105.mockapi.io/films/${searchId}`, formattedValues);
      navigate('/');
    } catch (err) {
      alert('Erro ao atualizar!');
    }
  };

  if (step === 'search') {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: 500 }}>
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h3 className="mb-4 text-center fw-bold">Alterar Filme</h3>
            <form onSubmit={handleSearch}>
              <div className="mb-3">
                <label htmlFor="id" className="form-label fw-semibold">Digite o ID do filme:</label>
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
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: 500 }}>
          <div className="card shadow-lg border-0 rounded-4 p-4 text-center">
            <h3 className="mb-4 fw-bold">Filme não encontrado!</h3>
            <Link to="/" className="btn btn-dark btn w-100">Voltar</Link>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'edit') {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="w-100" style={{ maxWidth: 500 }}>
          <div className="card shadow-lg border-0 rounded-4 p-4">
            <h3 className="mb-4 text-center fw-bold">Editar Filme</h3>
            <form onSubmit={handleUpdate}>
              <div className='mb-3'>
                <label htmlFor="nome" className='form-label fw-semibold'>Nome:</label>
                <input
                  type="text"
                  id="nome"
                  className='form-control'
                  placeholder='Digite o nome'
                  value={values.nome}
                  onChange={e => setValues({ ...values, nome: e.target.value })}
                  required
                />
              </div>
              <div className='mb-3'>
                <label htmlFor="genero" className='form-label fw-semibold'>Gênero:</label>
                <select
                  id="genero"
                  className="form-select"
                  value={values.genero}
                  onChange={e => setValues({ ...values, genero: e.target.value })}
                  required
                >
                  <option value="" disabled>Selecione um gênero</option>
                  <option value="Ação">Ação</option>
                  <option value="Comédia">Comédia</option>
                  <option value="Drama">Drama</option>
                  <option value="Fantasia">Fantasia</option>
                  <option value="Ficção Científica">Ficção Científica</option>
                  <option value="Romance">Romance</option>
                  <option value="Terror">Terror</option>
                </select>
              </div>
              <div className='mb-4'>
                <label htmlFor="ano" className='form-label fw-semibold'>Ano:</label>
                <input
                  type="number"
                  id="ano"
                  className='form-control'
                  placeholder='Digite o ano de lançamento'
                  value={values.ano}
                  onChange={e => setValues({ ...values, ano: e.target.value })}
                  required
                />
              </div>
              <div className="d-flex gap-3 mt-4">
                <button type="submit" className="btn btn-danger btn w-50">Alterar</button>
                <Link to="/" className="btn btn-outline-secondary btn w-50">Cancelar</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Update;