import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const capitalizeName = (name) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentYear = new Date().getFullYear();
    if (values.ano < 1888 || values.ano > currentYear) {
      setErrorMessage(`O ano deve estar entre 1888 e ${currentYear}.`);
      return;
    }

    if (!values.nome.trim()) {
      setErrorMessage('O nome é obrigatório.');
      return;
    }

    const formattedValues = {
      ...values,
      nome: capitalizeName(values.nome),
    };

    axios.post('https://682e69c8746f8ca4a47cf105.mockapi.io/films', formattedValues)
      .then(() => {
        setSuccessMessage('Filme criado com sucesso!');
        setErrorMessage('');
        setTimeout(() => navigate('/'), 1000);
      })
      .catch(err => {
        console.log(err);
        setErrorMessage('Erro ao criar o filme. Tente novamente.');
      });
  };

  return (
    <div className='min-vh-100 d-flex align-items-center justify-content-center'>
      <div className='w-100' style={{ maxWidth: 500 }}>
        <div className='card shadow-lg border-0 rounded-4 p-4'>
          <h3 className="mb-4 text-center fw-bold">Adicionar Filme</h3>
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="nome" className="form-label fw-semibold">Nome:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="form-control"
                placeholder="Digite o nome"
                onChange={e => setValues({ ...values, nome: e.target.value })}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="genero" className="form-label fw-semibold">Gênero:</label>
              <select
                id="genero"
                name="genero"
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
              <label htmlFor="ano" className="form-label fw-semibold">Ano:</label>
              <input
                type="number"
                id="ano"
                name="ano"
                className="form-control"
                placeholder="Digite o ano de lançamento"
                onChange={e => setValues({ ...values, ano: e.target.value })}
                required
              />
            </div>
            <div className="d-flex gap-3 mt-4">
              <button type="submit" className='btn btn-dark w-50 btn'>Criar</button>
              <Link to="/" className='btn btn-outline-secondary w-50 btn'>Cancelar</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
