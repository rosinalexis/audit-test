import { useState, useEffect } from 'react';
import questionnaire from '../data/questionsIndex';
import Question from './Question';
import Breadcrumb from './Breadcrumb';

const Questionnaire = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState(() => {
        const saved = localStorage.getItem('auditAnswers');
        return saved ? JSON.parse(saved) : {};
    });

    // Récupérer la méthodologie sélectionnée 
    const methodology = answers.projectInfo?.methodology;
    const methodValue = methodology?.value || "";

    // Base fixe de thèmes
    const baseOrder = ["projectInfo", "genericAudit"];

    // Mapping méthodologie => thème spécifique
    const methodologyMapping = {
        "Agile": "agileAudit",
        "Cycle en V": "vModelAudit",
        "Kanban": "kanbanAudit",
        "PRINCE2": "prince2Audit",
    };

    // Construction dynamique de l'ordre des thèmes
    const selectedThemeOrder = methodValue && methodologyMapping[methodValue]
        ? [...baseOrder, methodologyMapping[methodValue]]
        : [...baseOrder];

    // On récupère la liste des thèmes dans le bon ordre
    const orderedThemes = selectedThemeOrder
        .map((id) => questionnaire.themes.find((t) => t.id === id))
        .filter(Boolean);

    const currentTheme = orderedThemes[currentIndex];

    useEffect(() => {
        localStorage.setItem('auditAnswers', JSON.stringify(answers));
    }, [answers]);

    const handleAnswerChange = (questionId, value, points) => {
        setAnswers((prev) => ({
            ...prev,
            [currentTheme.id]: {
                ...prev[currentTheme.id],
                [questionId]: { value, points },
            },
        }));
    };

    return (
        <main className="container">
            {/* Fil d'Ariane */}
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
                    <button
                        type="button"
                        onClick={() => setCurrentIndex(i => i + 1)}
                    >
                        Suivant &rarr;
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => alert('Audit terminé ! Réponses :\n' + JSON.stringify(answers, null, 2))}
                    >
                        Valider
                    </button>
                )}
            </footer>
        </main>
    );
};

export default Questionnaire;
