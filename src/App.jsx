import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Questionnaire from './components/Questionnaire';
import RecapPage from './pages/RecapPage';

function App() {
  return (
    <Router>
      <main className="container">
        <header className="hero" style={{ marginBottom: "2rem" }}>
          <hgroup>
            <h1>📝 Audit de projet</h1>
            <p>Évaluez la méthodologie et les pratiques de votre projet.</p>
          </hgroup>
        </header>

        <section className="card" style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Questionnaire />} />
            <Route path="/recap" element={<RecapPage />} />
          </Routes>
        </section>

        <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
          <p>&copy; {new Date().getFullYear()} Audit Manager – Tous droits réservés.</p>
        </footer>
      </main>
    </Router>
  );
}

export default App;
