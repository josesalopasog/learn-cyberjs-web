import './styles.css';

const DBFundamentals = () => {
    return (
        <>
            <article className='sql-fundamentals-article'>
                <h2 className='gradient-text'>Fundamentos de una Base de Datos</h2>
                <p>
                    Una <strong>BD (base de datos)</strong> es un conjunto de datos organizados y relacionados entre sí, que se almacenan de forma estructurada para que puedan ser consultados y utilizados de manera eficiente.
                </p>
                <p>
                    Las BDs son <strong>similares a las tablas en Excel</strong> pero en SQL estan organizadas de manera que <strong>las filas representan los registros y las columnas los campos o atributos</strong>.
                    Esto te va a permitir sacarle el mayor potencial a todos los datos que tengas almacenados en Excel o en cualquier otra herramienta similar.
                </p>
                <h3>Tipos de Bases de Datos</h3>
                <table >
                    <thead>
                        <tr>
                            <th>Características</th>
                            <th>Relacionales (SQL) o RDBMS</th>
                            <th>No Relacionales (NoSQL)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Estructura</b></td>
                            <td>Basada en tablas fijas con filas y columnas</td>
                            <td>Basada en documentos, clave-valor, grafos o columnas</td>
                        </tr>
                        <tr>
                            <td><b>Esquema</b></td>
                            <td>Definido y rígido (schemas estrictos)</td>
                            <td>Flexible y dinámico</td>
                        </tr>
                        <tr>
                            <td><b>Relaciones</b></td>
                            <td>Uso de claves primarias y foráneas</td>
                            <td>No son necesarias, usa documentos anidados o enlaces</td>
                        </tr>
                        <tr>
                            <td><b>Escalabilidad</b></td>
                            <td>Vertical (más CPU, RAM)</td>
                            <td>Horizontal (más servidores)</td>
                        </tr>
                        <tr>
                            <td><b>Motores</b></td>
                            <td>MySQL, PostgreSQL, SQL Server, Oracle</td>
                            <td>MongoDB, Firebase, Cassandra, Redis</td>
                        </tr>
                        <tr>
                            <td><b>Casos de Uso</b></td>
                            <td>Sistemas financieros, ERPs, aplicaciones con datos estructurados</td>
                            <td>Big Data, redes sociales, sistemas en tiempo real</td>
                        </tr>
                        <tr>
                            <td><b>Consistencia</b></td>
                            <td>Alta (ACID)</td>
                            <td>Eventual (BASE)</td>
                        </tr>
                        <tr>
                            <td><b>Ejemplo de Consulta</b></td>
                            <td>SQL (SELECT, JOIN, etc.)</td>
                            <td>JSON o API específica del motor</td>
                        </tr>
                    </tbody>
                </table>

            </article>
        </>
    );
};

export default DBFundamentals;