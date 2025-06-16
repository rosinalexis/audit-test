import { useState, useEffect } from 'react';
import { themes, methodologyMapping } from '../data/questionsIndex';
import Question from './Question';
import Breadcrumb from './Breadcrumb';
import { useNavigate } from 'react-router-dom';

const Questionnaire = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState(() => {
        const saved = localStorage.getItem('auditAnswers');
        return saved ? JSON.parse(saved) : {};
    });

    const methodology = answers.projectInfo?.methodology;
    const methodValue = methodology?.value || "";
    const baseOrder = ["projectInfo", "genericAudit"];
    const selectedThemeOrder = methodValue && methodologyMapping[methodValue]
        ? [...baseOrder, methodologyMapping[methodValue]]
        : [...baseOrder];

    const orderedThemes = selectedThemeOrder
        .map((id) => themes.find((t) => t.id === id))
        .filter(Boolean);

    const currentTheme = orderedThemes[currentIndex];

    useEffect(() => {
        localStorage.setItem('auditAnswers', JSON.stringify(answers));
    }, [answers]);

    const handleAnswerChange = (questionId, value, { score, weight }) => {
        setAnswers((prev) => ({
            ...prev,
            [currentTheme.id]: {
                ...prev[currentTheme.id],
                [questionId]: { value, score, weight },
            },
        }));
    };

    const handleSubmit = () => {
        const completedAnswers = {
            ...answers,
            completed: true,
        };

        navigate('/recap', {
            state: {
                answers: completedAnswers,
                themes: themes,
            },
        });
    };

    return (
        <main className="container">
            <Breadcrumb
                themes={orderedThemes}
                currentIndex={currentIndex}
                onNavigate={setCurrentIndex}
            />

            <h2>{currentTheme.title}</h2>
            <form>
                {currentTheme.questions.map((q) => (
                    <Question
                        key={q.id}
                        question={q}
                        value={answers[currentTheme.id]?.[q.id]?.value || ''}
                        onChange={handleAnswerChange}
                    />
                ))}
            </form>

            <footer style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                {currentIndex > 0 && (
                    <button type="button" onClick={() => setCurrentIndex(i => i - 1)}>
                        &larr; Précédent
                    </button>
                )}

                {currentIndex < orderedThemes.length - 1 ? (
                    <button type="button" onClick={() => setCurrentIndex(i => i + 1)}>
                        Suivant &rarr;
                    </button>
                ) : (
                    <button type="button" onClick={handleSubmit}>
                        Valider
                    </button>
                )}
            </footer>

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button
                    onClick={() => {
                        localStorage.removeItem('auditAnswers');
                        window.location.reload();
                    }}
                    style={{ background: 'none', border: 'none', color: '#888', textDecoration: 'underline', cursor: 'pointer' }}
                >
                    Réinitialiser le questionnaire
                </button>
            </div>
        </main>
    );
};

export default Questionnaire;