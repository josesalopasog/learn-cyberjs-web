import './styles.css';

const ERModel = () => {
    return (
        <>
            <article className='er-model-article'>
                <h2 className='gradient-text'>Modelo Entidad-Relación (ER)</h2>
                <p>
                    El <strong>Modelo Entidad-Relación (ER)</strong> es una representación gráfica que se utiliza para modelar
                    la estructura de una base de datos. Este modelo se basa en la percepción de un mundo real que consiste en
                    entidades y las relaciones que existen entre ellas.
                </p>
                <h3>Componentes principales:</h3>
                <table className='er-model-table'>
                    <thead>
                        <tr>
                            <th>Componente</th>
                            <th>Descripción</th>
                            <th>Casos de Uso</th>
                            <th>Ejemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={2}><strong>Entidades</strong></td>
                            <td rowSpan={2}>Representan objetos o conceptos con existencia propia dentro del sistema.</td>
                            <td>Entidades <strong>Concretas</strong>: Se usan para representar un objeto con existencia física.</td>
                            <td><strong>Clientes</strong>, <strong>Productos</strong>, <strong>Empleados</strong></td>
                        </tr>
                        <tr>

                            <td>Entidades <strong>Abstractas</strong>: Se usan para representar un objeto con existencia conceptual.</td>
                            <td><strong>Asignaturas</strong>, <strong>Puestos de trabajo</strong> </td>
                        </tr>
                        <tr>
                            <td rowSpan={5}><strong>Atributos</strong></td>
                            <td rowSpan={5}>Características o propiedades de una entidad.</td>
                            <td>Atributos <strong>Simples</strong>: No se pueden dividir en más partes.</td>
                            <td><strong>edad</strong>, <strong>salario</strong></td>
                        </tr>
                        <tr>
                            <td>Atributos <strong>Compuestos</strong>: Un atributo que se puede dividir en componentes más pequeños y lógicos.</td>
                            <td><strong>nombres</strong>, <strong>dirección</strong>, <strong>fechas</strong>  </td>
                        </tr>
                        <tr>
                            <td>Atributos <strong>Monovalorado (Claves)</strong>: Es un atributo o conjunto de atributos que identifican de manera única una entidad.</td>
                            <td><strong>id_cliente</strong>, <strong>id_producto</strong>, <strong>id_estudiante</strong>  </td>
                        </tr>
                        <tr>
                            <td>Atributos <strong>Multivalorado</strong>: Son los atributos que pueden dener más de un valor asociado con una entidad.</td>
                            <td>
                                <strong>correos</strong> → Un empleado puede registrar más de una dirección de correo.
                            </td>
                        </tr>  
                        <tr>
                            <td>Atributos <strong>Derivados</strong>: Son atributos que se pueden calcular o derivar de otros atributos.</td>
                            <td>
                                <strong>edad</strong> → Se puede calcular por ejemplo con el atributo fecha de nacimiento.
                            </td>
                        </tr>                       
                        <tr>
                            <td rowSpan={3}><strong>Relaciones - Cardinalidad</strong></td>
                            <td rowSpan={3}>
                                <ul className='ul-sql-sm'>
                                    <li><strong>Relación:</strong> Es la forma de cómo las entidades interactúan o se asocian entre sí.</li>
                                    <li><strong>Cardinalidad:</strong> Describen la forma en la que las entidades se relacionan.</li>
                                </ul>   
                            </td>
                            <td><strong>Uno a Uno (1:1)</strong>: Una entidad A está relacionada con una sola entidad B y viceversa.</td>
                            <td>Una <strong>persona</strong> con su <strong>identificación ciudadana</strong>.</td>
                        </tr>
                        <tr>
                            <td><strong>Uno a muchos/Muchos a uno - (1:*),(1:N):</strong> Una entidad A puede estar relacionada con muchas entidades B, pero una entidad B está relacionada solo con una entidad A.</td>
                            <td>Un <strong>gerente</strong> puede estar asociado con muchos <strong>empleados (1:N)</strong>, pero cada <strong>empleado</strong> solo tiene un <strong>gerente</strong> asignado.</td> 
                        </tr>
                        <tr>
                            <td><strong>Muchos a Muchos - (*:*),(N:M):</strong> Muchas entidades A pueden estar relacionadas con muchas entidades B y viceversa.</td>
                            <td>Un <strong>estudiante</strong> puede estar en varios <strong>cursos</strong> y un <strong>curso</strong> puede tener varios <strong>estudiantes</strong>.</td> 
                        </tr>
                    </tbody>
                </table>

            </article>
        </>
    );
};

export default ERModel;