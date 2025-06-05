import Questionnaire from './components/Questionnaire';

function App() {
  return (
    <main className="container">
      <header className="hero" style={{ marginBottom: "2rem" }}>
        <hgroup>
          <h1>📝 Audit de projet</h1>
          <p>Évaluez la méthodologie et les pratiques de votre projet.</p>
        </hgroup>
      </header>

      <section className="card" style={{ padding: '2rem' }}>
        <Questionnaire />
      </section>

      <footer style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
        <p>&copy; {new Date().getFullYear()} Audit Manager – Tous droits réservés.</p>
      </footer>
    </main>
  );
}

export default App;
