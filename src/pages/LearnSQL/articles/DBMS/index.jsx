import './styles.css';

const DBMS = () => {
    return (
        <>
            <article className='dbms-article'>
                <h2 className='gradient-text'>Sistema de Gestión de Bases de Datos (SGBD)</h2>
                <p>
                    Un <strong>Sistema de Gestión de Bases de Datos (SGBD)</strong> es un <strong>software</strong> que se encarga de gestionar y administrar bases de datos,
                    permitiendo a los usuarios <strong> almacenar, modificar, recuperar y eliminar información</strong> de manera eficiente y segura.
                </p>
                <p>
                    Los DBMS son utilizados en entornos empresariales, educativos, científicos y personales, ya que facilitan la organización y
                    manipulación de <strong>grandes volúmenes de datos</strong>.
                </p>
                <h3>Tipos de SGBD</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Tipo de SGBD</th>
                            <th>Descripción</th>
                            <th>Ejemplos</th>
                            <th>Casos de Uso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>Relacionales (SQL)</b></td>
                            <td>Basados en el modelo de tablas y usan SQL</td>
                            <td>MySQL, PostgreSQL, Oracle, SQL Server</td>
                            <td>Sistemas financieros, ERPs, gestión empresarial</td>
                        </tr>
                        <tr>
                            <td><b>NoSQL</b></td>
                            <td>No utilizan SQL y son más flexibles</td>
                            <td>MongoDB, Cassandra, Redis</td>
                            <td>Big Data, aplicaciones en tiempo real, redes sociales</td>
                        </tr>
                        <tr>
                            <td><b>Jerárquicos</b></td>
                            <td>Organizan los datos en forma de árbol</td>
                            <td>IMS, RDM Mobile</td>
                            <td>Sistemas bancarios antiguos, archivos XML</td>
                        </tr>
                        <tr>
                            <td><b>Red</b></td>
                            <td>Modelo de datos de red con múltiples relaciones</td>
                            <td>IDMS, RDM Server</td>
                            <td>Sistemas de gestión complejos, telecomunicaciones</td>
                        </tr>
                        <tr>
                            <td><b>Objeto-Relacional</b></td>
                            <td>Extienden los modelos relacionales con características de objetos</td>
                            <td>Oracle, PostgreSQL</td>
                            <td>Aplicaciones que combinan datos estructurados y no estructurados</td>
                        </tr>
                        <tr>
                            <td><b>Documentales</b></td>
                            <td>Almacenan datos en formato JSON o BSON</td>
                            <td>MongoDB, CouchDB</td>
                            <td>Aplicaciones web, almacenamiento de logs</td>
                        </tr>
                        <tr>
                            <td><b>Clave-Valor</b></td>
                            <td>Almacenan datos en pares clave-valor</td>
                            <td>Redis, DynamoDB</td>
                            <td>Caché, almacenamiento de sesiones</td>
                        </tr>
                        <tr>
                            <td><b>Columnares</b></td>
                            <td>Almacenan datos en columnas en lugar de filas</td>
                            <td>Cassandra, HBase</td>
                            <td>Big Data, análisis de datos en tiempo real</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Caracteristicas principales</h3>
                <ol className='ol-sql'>
                    <li>Gestión de transacciones
                        <ul className='ul-sql'>
                            <li>Permiten realizar operaciones de forma segura y consistente.</li>
                            <li><strong>Soporte para ACID(Atomicidad, Consistencia, Aislamiento y Disponibilidad)</strong> lo que
                                garantiza la integridad y confiabilidad de los datos.</li>

                        </ul>
                    </li>
                    <li>Control de concurrencia
                        <ul className='ul-sql'>
                            <li>Permiten a <strong>varios usuarios acceder</strong> a la base de datos al mismo tiempo.</li>
                            <li>Evitan problemas como la lectura sucia, la escritura sucia y la lectura no repetible.</li>
                        </ul>
                    </li>
                    <li>Lenguaje de consulta
                        <ul className='ul-sql'>
                            <li>Proporcionan un lenguaje para realizar consultas y manipular datos.</li>
                            <li>En el caso de los SGBD relacionales, se utiliza SQL (Structured Query Language).</li>
                            <li>NoSQL usa otros lenguajes o APIs</li>
                        </ul>
                    </li>
                    <li>Optimización de consultas
                        <ul className='ul-sql'>
                            <li>Analizan y optimizan las consultas para mejorar el rendimiento.</li>
                            <li>Utilizan técnicas como la indexación, la normalización y la denormalización.</li>
                        </ul>
                    </li>
                    <li>Almacenamiento
                        <ul className='ul-sql'>
                            <li>Almacenan los datos de forma eficiente y segura.</li>
                            <li>Utilizan estructuras de almacenamiento como tablas, índices y vistas.</li>
                        </ul>
                    </li>
                    <li>Seguridad y Autentificación
                        <ul className='ul-sql'>
                            <li>Protegen los datos de accesos no autorizados.</li>
                            <li>Permiten definir permisos y roles para controlar quién puede acceder a qué datos.</li>
                        </ul>
                    </li>
                    <li>Escalabilidad y Rendimiento
                        <ul className='ul-sql'>
                            <li>Permiten escalar horizontal o verticalmente para manejar grandes volúmenes de datos.</li>
                            <li>Optimizan el rendimiento para consultas rápidas y eficientes.</li>
                        </ul>
                    </li>
                    <li>Integridad y Consistencia de los Datos
                        <ul className='ul-sql'>
                            <li>Utilizan restricciones, claves primarias y foráneas para mantener la coherencia de los datos durante las transacciones.</li>
                        </ul>
                    </li>
                    <li>Soporte para tipos de datos avanzados
                        <ul className='ul-sql'>
                            <li>Permiten almacenar y manipular tipos de datos complejos como imágenes, audio, video, etc.</li>
                            <li>Proporcionan funciones y operadores para trabajar con estos tipos de datos.</li>
                        </ul>
                    </li>
                    <li>Recuperación y Copias de Seguridad
                        <ul className='ul-sql'>
                            <li>Permiten realizar copias de seguridad y recuperar datos en caso de fallos.</li>
                            <li>Utilizan técnicas como el journaling y el logging para garantizar la integridad de los datos.</li>
                        </ul>
                    </li>
                    <li>Compatibilidad y extensibilidad
                        <ul className='ul-sql'>
                            <li>Interoperabilidad: Permiten integrarse con otros sistemas através de APIs, ODBC/JDCB o controladores nativos.</li>
                            <li>Extensibilidad: Permiten añadir funcionalidades y características personalizadas.</li>
                            <li>Proporcionan APIs y drivers para desarrollar aplicaciones y servicios.</li>
                        </ul>
                    </li>
                </ol>
            </article>
        </>
    );
};

export default DBMS;