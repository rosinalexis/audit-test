
const Question = ({ question, value, onChange }) => {
    const handleChange = (e) => {
        onChange(question.id, e.target.value, question.points);
    };

    return (
        <div className="question-block" style={{ marginBottom: "1rem" }}>
            <label style={{ fontWeight: "bold" }}>
                {question.label}
                {question.points && (
                    <span style={{ fontSize: "0.8em", color: "#888" }}> ({question.points} pts)</span>
                )}
            </label>

            {question.type === "select" && question.options ? (
                <select value={value?.value || value || ""} onChange={handleChange}>
                    <option value="">-- Sélectionner --</option>
                    {question.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
            ) : question.type === "radio" && question.options ? (
                <div>
                    {question.options.map((opt) => (
                        <label key={opt} style={{ display: "block", marginLeft: "1rem" }}>
                            <input
                                type="radio"
                                name={question.id}
                                value={opt}
                                checked={(value?.value || value) === opt}
                                onChange={handleChange}
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            ) : (
                <input
                    type="text"
                    value={value?.value || value || ""}
                    onChange={handleChange}
                />
            )}
        </div>
    );
};


export default Question;