import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import PropTypes from 'prop-types';

import customTheme from '../../assets/themes/customTheme';
import './CodeHighlighter.css';

const CodeHighlighter = ({ filePath, language, lineNumber }) => {
    const [code, setCode] = useState(null);

    useEffect(() => {
        const fetchCode = async () => {
            try {
                const response = await fetch(`/${filePath}`);
                if (!response.ok) throw new Error(`No se pudo cargar: ${filePath}`);
                let text = await response.text();

                // Eliminar los <script> inyectados por Vite
                text = text.replace(/<script\b[^<]*>[\s\S]*?<\/script>/gi, "");

                // Eliminar líneas vacías extra
                text = text
                    .split("\n")          // Convertir en array de líneas
                    .filter(line => line.trim() !== "") // Filtrar líneas vacías
                    .join("\n");          // Volver a unir

                // Si se especifica lineNumber, mostrar solo esa línea
                if (lineNumber) {
                    const lines = text.split("\n");
                    if (lineNumber > 0 && lineNumber <= lines.length) {
                        text = lines[lineNumber - 1]; // Restamos 1 porque los arrays son base 0
                    } else {
                        throw new Error(`Línea ${lineNumber} fuera de rango.`);
                    }
                }

                setCode(text.trim());
            } catch (error) {
                console.error("Error cargando el archivo:", error);
                setCode("Error cargando el archivo.");
            }
        };

        fetchCode();
    }, [filePath, lineNumber]); // Agregar lineNumber como dependencia

    return (
        <div className='syntax-highlighter-container'>
            <SyntaxHighlighter 
                language={language} 
                style={customTheme}
                showLineNumbers={!lineNumber} // Mostrar números de línea solo si no se especifica una línea
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

CodeHighlighter.propTypes = {
    filePath: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    lineNumber: PropTypes.number, // Nueva prop opcional
};

export default CodeHighlighter;