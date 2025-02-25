

const ImportantCommands = () => {
    return (
        <>
            <article className='important-commands-article'>
                <h2 className='gradient-text'>Comandos Importantes de SQL</h2>
                <p>
                    Los comandos de SQL permiten interactuar con las bases de datos  para realizar las 4 operaciones basicas <strong> CRUD - Create(Crear), Read(Leer), Update(Actualizar) y Delete(Eliminar)</strong>.
                </p>
                <p>
                    Estos comandos se agrupan de la siguiente manera:
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo de Comando</th>
                            <th>Propósito</th>
                            <th>Comandos Principales</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>DQL (Data Query Language)</td>
                            <td><strong>Consultar o recuperar</strong> datos de la base de datos.</td>
                            <td>
                                <ul>
                                    <li><strong>SELECT</strong> → Recupera información de las tablas.</li>
                                </ul>
                            </td>
                            <td><code><strong>SELECT</strong> * FROM clientes WHERE pais = {`'Colombia'`};</code></td>
                        </tr>
                        <tr>
                            <td>DDL (Data Definition Language)</td>
                            <td><strong>Definir o modificar</strong> la estructura de la base de datos.</td>
                            <td>
                                <ul>
                                    <li><strong>CREATE</strong> → Crea bases de datos, tablas, índices, vistas.</li>
                                    <li><strong>ALTER</strong> → Modifica tablas existentes.</li>
                                    <li><strong>DROP</strong> → Elimina tablas o bases de datos.</li>
                                    <li><strong>TRUNCATE</strong> → Borra datos sin registrar transacciones.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li><code><strong>CREATE</strong> TABLE empleados (id INT PRIMARY KEY, nombre VARCHAR(50), salario DECIMAL(10,2));</code></li>
                                    <li><code><strong>ALTER</strong> TABLE empleados ADD COLUMN edad INT;</code></li>
                                    <li><code><strong>DROP</strong> TABLE empleados;</code></li>
                                    <li><code><strong>TRUNCATE</strong> TABLE empleados;</code></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>DML (Data Manipulation Language)</td>
                            <td><strong>Manipular</strong> los datos dentro de las tablas.</td>
                            <td>
                                <ul>
                                    <li><strong>INSERT</strong> → Inserta nuevos registros.</li>
                                    <li><strong>UPDATE</strong> → Modifica registros existentes.</li>
                                    <li><strong>DELETE</strong> → Elimina registros específicos.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li><code><strong>INSERT</strong> INTO empleados (id, nombre, salario) VALUES (1, {`'José'`}, 5000);</code></li>
                                    <li><code><strong>UPDATE</strong> empleados SET salario = 5500 WHERE id = 1;</code></li>
                                    <li><code><strong>DELETE</strong> FROM empleados WHERE id = 1;</code></li>
                                </ul>

                            </td>
                        </tr>
                        <tr>
                            <td>DCL (Data Control Language)</td>
                            <td><strong>Controlar el acceso</strong> y permisos de los usuarios.</td>
                            <td>
                                <ul>
                                    <li><strong>GRANT</strong> → Concede permisos.</li>
                                    <li><strong>REVOKE</strong> → Revoca permisos.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li><code><strong>GRANT</strong> SELECT, INSERT ON empleados TO usuario1;</code></li>
                                    <li><code><strong>REVOKE</strong> INSERT ON empleados FROM usuario1;</code></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>TCL (Transaction Control Language)</td>
                            <td><strong>Controlar transacciones</strong> para mantener la consistencia de los datos.</td>
                            <td>
                                <ul>
                                    <li><strong>COMMIT</strong> → Guarda los cambios.</li>
                                    <li><strong>ROLLBACK</strong> → Deshace cambios no confirmados.</li>
                                    <li><strong>SAVEPOINT</strong> → Crea puntos de control en una transacción.</li>
                                    <li><strong>SET TRANSACTION</strong> → Configura propiedades de la transacción.</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li><code>BEGIN; UPDATE empleados SET salario = 6000 WHERE id = 2; <strong>COMMIT</strong>;</code></li>
                                    <li><code>BEGIN; UPDATE empleados SET salario = 6500 WHERE id = 2; <strong>ROLLBACK</strong>;</code></li>
                                    <li><code><strong>SAVEPOINT</strong> punto1;</code></li>
                                    <li><code><strong>ROLLBACK</strong> TO punto1;</code></li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default ImportantCommands;