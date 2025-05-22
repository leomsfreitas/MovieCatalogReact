import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete';
import Read from './components/Read';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/criar" element={<Create />} />
          <Route path="/alterar" element={<Update />} />
          <Route path="/apagar" element={<Delete />} />
          <Route path="/ler/:id" element={<Read />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
