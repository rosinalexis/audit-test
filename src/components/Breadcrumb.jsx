const Breadcrumb = ({ themes, currentIndex, onNavigate }) => {
    return (
        <nav aria-label="Fil d'Ariane" style={{ marginBottom: '1rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0, gap: '0.5rem', flexWrap: 'wrap' }}>
                {themes.map((theme, index) => (
                    <li key={theme.id} style={{ display: 'flex', alignItems: 'center' }}>
                        {index !== 0 && <span style={{ margin: '0 0.5rem' }}>›</span>}

                        {index === currentIndex ? (
                            <strong style={{ color: 'var(--primary)' }}>{theme.title}</strong>
                        ) : (
                            <button
                                type="button"
                                onClick={() => onNavigate(index)}
                                className="contrast"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    padding: 0,
                                    color: 'var(--primary)'
                                }}
                            >
                                {theme.title}
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
