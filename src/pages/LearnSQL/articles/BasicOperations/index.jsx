import './styles.css';

const BasicOperations = () => {
    return (
        <>
            <article className='basic-operations-article' id='basic-operations' >
                <h2 className='gradient-text'>Operaciones básicas en SQL</h2>
                <p>
                    Las operaciones básicas en SQL son las instrucciones que permiten interactuar con la base de datos.
                </p>
                <p>Algunas de las operaciones más comunes son:</p>
                <h3>Operadores de comparación</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'='}</strong></td>
                            <td>Comprueba si dos expresiones son iguales.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'='}</strong> 5000;</td>
                        </tr>
                        <tr>
                            <td><strong>{'<> '}</strong> o <strong>{'!='}</strong></td>
                            <td>Comprueba si dos expresiones no son iguales.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'!='}</strong> 5000;</td>
                        </tr>
                        <tr>
                            <td><strong>{'>'}</strong></td>
                            <td>Comprueba si la expresión izquierda es mayor que la derecha.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'>'}</strong> 5000;</td>
                        </tr>
                        <tr>
                            <td><strong>{'<'}</strong></td>
                            <td>Comprueba si la expresión izquierda es menor que la derecha.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'<'}</strong> 5000;</td>
                        </tr>
                        <tr>
                            <td><strong>{'>='}</strong></td>
                            <td>Comprueba si la expresión izquierda es mayor o igual que la derecha.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'>='}</strong> 5000;</td>
                        </tr>
                        <tr>
                            <td><strong>{'<='}</strong></td>
                            <td>Comprueba si la expresión izquierda es menor o igual que la derecha.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'<='}</strong> 5000;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores Lógicos</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'AND'}</strong></td>
                            <td>Combina múltiples condiciones; todas deben ser verdaderas.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'>'}</strong> 3000 <strong>{'AND'}</strong> departamento = <strong>{'Ventas'}</strong>;</td>
                        </tr>
                        <tr>
                            <td><strong>{'OR'}</strong></td>
                            <td>Combina múltiples condiciones; al menos una debe ser verdadera.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'>'}</strong> 5000 <strong>{'OR'}</strong> departamento = <strong>{'Ventas'}</strong>;</td>
                        </tr>
                        <tr>
                            <td><strong>{'NOT'}</strong></td>
                            <td>Niega una condición.</td>
                            <td>SELECT * FROM empleados WHERE <strong>{'NOT'}</strong> departamento = <strong>{'Ventas'}</strong>;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores Aritméticos</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'+'}</strong></td>
                            <td>Suma dos expresiones.</td>
                            <td>SELECT 10 <strong>{'+'}</strong> 5;</td>
                        </tr>
                        <tr>
                            <td><strong>{'-'}</strong></td>
                            <td>Resta la expresión derecha de la izquierda.</td>
                            <td>SELECT 10 <strong>{'-'}</strong> 5;</td>
                        </tr>
                        <tr>
                            <td><strong>{'*'}</strong></td>
                            <td>Multiplica dos expresiones.</td>
                            <td>SELECT 10 <strong>{'*'}</strong> 5;</td>
                        </tr>
                        <tr>
                            <td><strong>{'/'}</strong></td>
                            <td>Divide la expresión izquierda por la derecha.</td>
                            <td>SELECT 10 <strong>{'/'}</strong> 5;</td>
                        </tr>
                        <tr>

                            <td><strong>{'%'}</strong></td>
                            <td>Devuelve el resto de la división de dos expresiones.</td>
                            <td>SELECT 10 <strong>{'%'}</strong> 3;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores de cadenas</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>

                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'||'}</strong></td>
                            <td>Concatena dos cadenas (usado en algunos dialectos SQL como PostgreSQL).</td>
                            <td>SELECT {'Hola'} <strong>{'||'}</strong> {' Mundo'};</td>
                        </tr>
                        <tr>
                            <td><strong>{'CONCAT()'}</strong></td>
                            <td>Concatena dos o más cadenas (usado en SQL Server y MySQL).</td>
                            <td>SELECT <strong>{'CONCAT'}</strong>({'Hola'}, {' Mundo'});</td>
                        </tr>
                        <tr>
                            <td><strong>{'LIKE'}</strong></td>
                            <td>Se usa para coincidencias de patrones en cadenas.</td>
                            <td>SELECT * FROM empleados WHERE nombre <strong>{'LIKE'}</strong> {'Juan%'};</td>
                        </tr>
                        <tr>
                            <td><strong>{'IN'}</strong></td>
                            <td>Verifica si un valor coincide con cualquier valor en una lista de valores.</td>
                            <td>SELECT * FROM empleados WHERE departamento <strong>{'IN'}</strong> ({'Ventas'}, {'Marketing'});</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores de Conjuntos</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'UNION'}</strong></td>
                            <td>Combina los resultados de dos sentencias SELECT, eliminando duplicados.</td>
                            <td>SELECT nombre FROM empleados_2024 <strong>{'UNION'}</strong> SELECT nombre FROM empleados_2025;</td>
                        </tr>
                        <tr>
                            <td><strong>{'UNION ALL'}</strong></td>
                            <td>Combina los resultados de dos sentencias SELECT, incluyendo duplicados.</td>
                            <td>SELECT nombre FROM empleados_2024 <strong>{'UNION ALL'}</strong> SELECT nombre FROM empleados_2025;</td>
                        </tr>
                        <tr>
                            <td><strong>{'INTERSECT'}</strong></td>
                            <td>Devuelve las filas comunes entre dos sentencias SELECT.</td>
                            <td>SELECT nombre FROM empleados_2024 <strong>{'INTERSECT'}</strong> SELECT nombre FROM empleados_2025;</td>
                        </tr>
                        <tr>
                            <td><strong>{'EXCEPT'}</strong> o <strong>{'MINUS'}</strong></td>
                            <td>Devuelve las filas de la primera consulta que no están en la segunda.</td>
                            <td>SELECT nombre FROM empleados_2024 <strong>{'EXCEPT'}</strong> SELECT nombre FROM empleados_2025;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Funciones de Agregación</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'COUNT()'}</strong></td>
                            <td>Cuenta el número de filas en una columna especificada.</td>
                            <td>SELECT <strong>{'COUNT(*)'}</strong> FROM empleados;</td>
                        </tr>
                        <tr>
                            <td><strong>{'SUM()'}</strong></td>
                            <td>Calcula la suma de los valores en una columna.</td>
                            <td>SELECT <strong>{'SUM(salario)'}</strong> FROM empleados;</td>
                        </tr>
                        <tr>
                            <td><strong>{'AVG()'}</strong></td>
                            <td>Calcula el promedio de los valores en una columna.</td>
                            <td>SELECT <strong>{'AVG(salario)'}</strong> FROM empleados;</td>
                        </tr>
                        <tr>
                            <td><strong>{'MIN()'}</strong></td>
                            <td>Devuelve el valor mínimo en una columna.</td>
                            <td>SELECT <strong>{'MIN(salario)'}</strong> FROM empleados;</td>
                        </tr>
                        <tr>
                            <td><strong>{'MAX()'}</strong></td>
                            <td>Devuelve el valor máximo en una columna.</td>
                            <td>SELECT <strong>{'MAX(salario)'}</strong> FROM empleados;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores de Unión</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'INNER JOIN'}</strong></td>
                            <td>Devuelve las filas que tienen valores coincidentes en ambas tablas.</td>
                            <td>SELECT * FROM empleados <strong>{'INNER JOIN'}</strong> departamentos ON empleados.dep_id = departamentos.id;</td>
                        </tr>
                        <tr>
                            <td><strong>{'LEFT JOIN'}</strong> (o <strong>{'LEFT OUTER JOIN'}</strong>)</td>
                            <td>Devuelve todas las filas de la tabla izquierda y las coincidencias de la tabla derecha.</td>
                            <td>SELECT * FROM empleados <strong>{'LEFT JOIN'}</strong> departamentos ON empleados.dep_id = departamentos.id;</td>
                        </tr>
                        <tr>
                            <td><strong>{'RIGHT JOIN'}</strong> (o <strong>{'RIGHT OUTER JOIN'}</strong>)</td>
                            <td>Devuelve todas las filas de la tabla derecha y las coincidencias de la tabla izquierda.</td>
                            <td>SELECT * FROM empleados <strong>{'RIGHT JOIN'}</strong> departamentos ON empleados.dep_id = departamentos.id;</td>
                        </tr>
                        <tr>
                            <td><strong>{'FULL JOIN'}</strong> (o <strong>{'FULL OUTER JOIN'}</strong>)</td>
                            <td>Devuelve todas las filas cuando hay una coincidencia en al menos una de las tablas.</td>
                            <td>SELECT * FROM empleados <strong>{'FULL JOIN'}</strong> departamentos ON empleados.dep_id = departamentos.id;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores de Subconsulta (Subquery Operators)</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'EXISTS'}</strong></td>
                            <td>Verifica si una subconsulta devuelve alguna fila.</td>
                            <td>SELECT * FROM empleados WHERE <strong>{'EXISTS'}</strong> (SELECT * FROM departamentos WHERE empleados.dep_id = departamentos.id);</td>
                        </tr>
                        <tr>
                            <td><strong>{'ANY'}</strong> o <strong>{'SOME'}</strong></td>
                            <td>Se usa con operadores de comparación para comparar un valor con cualquier valor en una subconsulta.</td>
                            <td>SELECT * FROM empleados WHERE salario {`>`} <strong>{'ANY'}</strong> (SELECT salario FROM empleados WHERE dep_id = 1);</td>
                        </tr>
                        <tr>
                            <td><strong>{'ALL'}</strong></td>
                            <td>Se usa con operadores de comparación para comparar un valor con todos los valores en una subconsulta.</td>
                            <td>SELECT * FROM empleados WHERE salario {`>`} <strong>{'ALL'}</strong> (SELECT salario FROM empleados WHERE dep_id = 1);</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores de Nulos</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'IS NULL'}</strong></td>
                            <td>Verifica si un valor es NULL.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'IS NULL'}</strong>;</td>
                        </tr>
                        <tr>
                            <td><strong>{'IS NOT NULL'}</strong></td>
                            <td>Verifica si un valor no es NULL.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'IS NOT NULL'}</strong>;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operadores de Comparación</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'BETWEEN'}</strong></td>
                            <td>Verifica si un valor está dentro de un rango especificado.</td>
                            <td>SELECT * FROM empleados WHERE salario <strong>{'BETWEEN'}</strong> 3000 AND 6000;</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Operador CASE</h3>
                <table className='operators-table'>
                    <thead>
                        <tr>
                            <th>Operador</th>
                            <th>Propósito</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>{'CASE'}</strong></td>
                            <td>Proporciona lógica condicional dentro de consultas SQL.</td>
                            <td>SELECT nombre, salario, <strong>{'CASE'}</strong> WHEN salario {`>`} 5000 THEN {'Alto'}
                                WHEN salario BETWEEN 3000 AND 5000 THEN {'Medio'}
                                ELSE {'Bajo'}
                                END AS categoria
                                FROM empleados;</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </>
    );
};

export default BasicOperations;