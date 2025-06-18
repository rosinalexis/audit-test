import InputRenderer from './InputRenderer';
import { computeScore } from '../utils/scoring';

const Question = ({ question, value, onChange }) => {
    const handleChange = (selectedValue) => {
        const score = computeScore(question, selectedValue);
        onChange(question.id, selectedValue, {
            score,
            weight: question.weight,
            category: question.category
        });
    };

    return (
        <div className="question-block" style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold" }}>
                {question.label}
                {question.weight && <span style={{ fontSize: "0.8em", color: "#888" }}> ({question.weight} pts)</span>}
            </label>
            <InputRenderer
                question={question}
                value={value?.value || value || ""}
                onChange={handleChange}
            />
        </div>
    );
};
export default Question;