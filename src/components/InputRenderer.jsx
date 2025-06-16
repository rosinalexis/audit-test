const InputRenderer = ({ question, value, onChange }) => {
    const handleChange = (e) => onChange(e.target.value);

    if (!question.options) return (
        <input type="text" value={value} onChange={handleChange} />
    );

    if (question.type === 'radio') {
        return question.options.map((opt) => (
            <label key={opt} style={{ display: "block" }}>
                <input
                    type="radio"
                    name={question.id}
                    value={opt}
                    checked={value === opt}
                    onChange={handleChange}
                />
                {opt}
            </label>
        ));
    }

    if (question.type === 'select') {
        return (
            <select value={value} onChange={handleChange}>
                <option value="">-- Sélectionner --</option>
                {question.options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>
        );
    }

    return null;
};
export default InputRenderer;