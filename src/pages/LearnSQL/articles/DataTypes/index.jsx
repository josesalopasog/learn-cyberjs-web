import './styles.css';

const DataTypes = () => {
    return (
        <>
            <article className='data-types-article' id='data-types'>
                <h2 className='gradient-text'>Tipos de Datos en SQL</h2>
                <p>
                Los tipos de datos en SQL definen el tipo de valores que pueden almacenarse en una columna de una tabla. 
                Ayudan a garantizar la integridad de los datos, optimizar el rendimiento y gestionar el almacenamiento de
                manera eficiente.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo de Dato</th>
                            <th>Descripción/Uso</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>INT</strong></td>
                            <td>Almacena números enteros.</td>
                            <td><code>100, -50, 2000</code></td>
                        </tr>
                        <tr>
                            <td><strong>BIGINT</strong></td>
                            <td>Almacena números enteros grandes.</td>
                            <td><code>9223372036854775807</code></td>
                        </tr>
                        <tr>
                            <td><strong>DECIMAL(p, s)</strong> / <strong>NUMERIC(p, s)</strong></td>
                            <td>Almacena números con precisión decimal, donde <code>p</code> es el número total de dígitos y <code>s</code> es el número de decimales.</td>
                            <td><code>DECIMAL(10,2): 12345.67</code></td>
                        </tr>
                        <tr>
                            <td><strong>FLOAT</strong> / <strong>REAL</strong></td>
                            <td>Almacena números de punto flotante (aproximados).</td>
                            <td><code>3.14159, -0.0002</code></td>
                        </tr>
                        <tr>
                            <td><strong>CHAR(n)</strong></td>
                            <td>Almacena una cadena de caracteres de longitud fija.</td>
                            <td><code>CHAR(5): {`'SQL  '`}</code></td>
                        </tr>
                        <tr>
                            <td><strong>VARCHAR(n)</strong></td>
                            <td>Almacena una cadena de caracteres de longitud variable.</td>
                            <td><code>VARCHAR(50): {`'Base de datos'`}</code></td>
                        </tr>
                        <tr>
                            <td><strong>TEXT</strong></td>
                            <td>Almacena texto de gran tamaño.</td>
                            <td><code>{`'Este es un texto largo...'`}</code></td>
                        </tr>
                        <tr>
                            <td><strong>DATE</strong></td>
                            <td>Almacena fechas en formato <code>AAAA-MM-DD</code>.</td>
                            <td><code>{`'2025-02-23'`}</code></td>
                        </tr>
                        <tr>
                            <td><strong>TIME</strong></td>
                            <td>Almacena horas en formato <code>HH:MI:SS</code>.</td>
                            <td><code>{`'14:30:00'`}</code></td>
                        </tr>
                        <tr>
                            <td><strong>DATETIME</strong></td>
                            <td>Almacena fecha y hora combinadas.</td>
                            <td><code>{`'2025-02-23 14:30:00'`}</code></td>
                        </tr>
                        <tr>
                            <td><strong>BOOLEAN</strong></td>
                            <td>Almacena valores verdaderos o falsos (<code>1</code> o <code>0</code>).</td>
                            <td><code>TRUE, FALSE</code></td>
                        </tr>
                        <tr>
                            <td><strong>BLOB</strong></td>
                            <td>Almacena datos binarios grandes, como imágenes o archivos.</td>
                            <td><code>Archivo de imagen binaria</code></td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default DataTypes;