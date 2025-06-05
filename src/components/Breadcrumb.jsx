import React from 'react';

const Breadcrumb = ({ themes, currentIndex, onNavigate }) => {
    return (
        <nav aria-label="breadcrumb" style={{ marginBottom: '1rem' }}>
            {themes.map((theme, index) => (
                <span key={theme.id}>
                    {index === currentIndex ? (
                        <strong>{theme.title}</strong>
                    ) : (
                        <button
                            type="button"
                            onClick={() => onNavigate(index)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: 'blue',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                padding: 0,
                                fontSize: '1rem',
                            }}
                        >
                            {theme.title}
                        </button>
                    )}
                    {index < themes.length - 1 && " > "}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
