import './styles.css';

const ObjectsInDB = () => {
    return (
        <>
            <article className='objects-in-db-article'>
                <h2 className='gradient-text'>Objetos en Bases de Datos</h2>
                <p>
                    En una base de datos relacional, los objetos son estructuras que se utilizan para almacenar y organizar la información. Los objetos más comunes en una base de datos son:
                </p>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Objeto</th>
                            <th>Descripción</th>
                            <th>Características</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Esquemas</b></td>
                            <td>Define cómo se <strong>organizan</strong> los datos en la base de datos dependiendo del área de negocio.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Una base de datos puede tener <strong>múltiples esquemas</strong>  (ej.: contabilidad, facturación).</li>
                                    <li><strong>Jerarquía</strong>: {`Motor de base de datos > Base de datos > Esquemas > Tablas y otros objetos.`}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Tablas</b></td>
                            <td>Colección de datos organizados en <strong>filas y columnas</strong>.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li><strong>Fila</strong>: Registro único.</li>
                                    <li><strong>Columna</strong>: Atributo con un tipo de dato específico.</li>
                                    <li>Puede tener <strong>claves primarias</strong> y <strong>foráneas</strong>.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Claves</b></td>
                            <td>Sirven como <strong>identificadores únicos</strong> en las tablas.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li><strong>Clave primaria</strong>: Identifica cada fila de forma única, no admite nulos.</li>
                                    <li><strong>Clave foránea</strong>: Relaciona tablas, apunta a una clave primaria.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Vistas</b></td>
                            <td>Consultas predefinidas que actúan como <strong>tablas virtuales</strong>.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Útiles para simplificar consultas complejas.</li>
                                    <li>Pueden ser <strong>temporales</strong> o <strong>materializadas</strong>.</li>
                                    <li>No almacenan datos, solo la consulta.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Procedimientos almacenados</b></td>
                            <td><strong>Bloques de código SQL</strong> almacenados y ejecutados en el servidor.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Automatizan tareas específicas en la base de datos.</li>
                                    <li>Mejoran el rendimiento al reducir tráfico entre <strong>cliente-servidor</strong>.</li>
                                    <li>Pueden recibir <strong>parámetros</strong> y devolver valores.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Índices</b></td>
                            <td>Mejoran la <strong>velocidad de búsqueda</strong> en las tablas.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Se crean en una o varias columnas.</li>
                                    <li>Pueden ser <strong>únicos</strong> o <strong>no únicos</strong>.</li>
                                    <li>Aceleran consultas pero consumen almacenamiento adicional.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Triggers</b></td>
                            <td>Acciones automáticas que se ejecutan cuando ocurre un evento.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Se activan en <strong>INSERT, UPDATE o DELETE</strong>.</li>
                                    <li>Se usan para <strong>auditoría</strong> o <strong>validaciones</strong>.</li>
                                    <li>No pueden recibir <strong>parámetros</strong> ni devolver valores.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Funciones</b></td>
                            <td>Bloques de código reutilizables que devuelven un <strong>valor</strong>.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Similares a los <strong>procedimientos almacenados</strong> pero devuelven un dato específico.</li>
                                    <li>Se pueden usar en consultas <strong>SELECT</strong>.</li>
                                    <li>Pueden recibir <strong>parámetros de entrada</strong>.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><b>Transacciones</b></td>
                            <td>Conjunto de <strong>operaciones SQL</strong> que deben ejecutarse de forma completa o no ejecutarse.</td>
                            <td>
                                <ul className='ul-sql-objects'>
                                    <li>Siguen las propiedades <strong>ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad)</strong>.</li>
                                    <li>Se usan para garantizar la <strong>integridad</strong> de los datos.</li>
                                    <li>Pueden ser confirmadas (<strong>COMMIT</strong>) o revertidas (<strong>ROLLBACK</strong>).</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </article>
        </>
    );
};

export default ObjectsInDB;
