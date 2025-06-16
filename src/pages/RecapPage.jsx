import { useLocation, Link } from 'react-router-dom';
import { methodologyMapping } from '../data/questionsIndex';

const RecapPage = () => {
    const location = useLocation();
    const { answers, themes } = location.state || {};

    if (!answers || !themes) {
        return <p>Données manquantes. Veuillez compléter l'audit d'abord.</p>;
    }

    const methodologyValue = answers.projectInfo?.methodology?.value || answers.projectInfo?.methodology;
    const themeOrder = ["projectInfo", "genericAudit"];
    const selectedMethodologyId = methodologyMapping[methodologyValue];
    if (selectedMethodologyId) themeOrder.push(selectedMethodologyId);

    const calculateScore = (themeId) => {
        const themeAnswers = answers[themeId];
        if (!themeAnswers) return 0;

        return Object.values(themeAnswers).reduce((sum, a) => sum + (a.score || 0), 0);
    };

    return (
        <div className="container">
            <h2>Récapitulatif de l'audit</h2>
            <table role="grid">
                <thead>
                    <tr>
                        <th>Thème</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {themeOrder.map(themeId => {
                        const theme = themes.find(t => t.id === themeId);
                        return (
                            <tr key={themeId}>
                                <td>{theme?.title || themeId}</td>
                                <td>{calculateScore(themeId)} pts</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <Link to="/" className="contrast" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Retour à l’accueil
            </Link>
        </div>
    );
};

export default RecapPage;