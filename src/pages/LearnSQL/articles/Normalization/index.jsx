import './styles.css';

const Normalization = () => {
    return (
        <>
            <article className='normalization-article' id='normalization'>
                <h2 className='gradient-text'>Normalización en SQL</h2>
                <p>
                    La normalización es un proceso en SQL para <strong>estructurar</strong> una base de datos
                    de manera que <strong>minimice la redundancia</strong> de datos y garantice la <strong>integridad</strong>.
                </p>
                <p>
                    Esto se logra dividiendo tablas grandes en tablas más pequeñas y definiendo
                    relaciones entre ellas mediante <strong>claves primarias y foráneas</strong>.
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Forma Normal</th>
                            <th>Criterios para cumplir la normalización</th>
                            <th>Beneficios/Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Primera Forma Normal (<strong>1NF</strong>)</strong></td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Los valores en cada columna deben ser <strong>atómicos</strong> (un único valor por celda).</li>
                                    <li>Todos los valores en una columna deben ser del <strong>mismo tipo</strong>.</li>
                                    <li>Cada columna debe tener un <strong>nombre único</strong>.</li>
                                    <li>El <strong>orden</strong> en el que se almacenan los datos <strong>no importa</strong>.</li>
                                </ul>
                            </td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Elimina los valores repetidos dentro de una columna.</li>
                                    <li>Cada celda de la tabla contiene un único valor.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Segunda Forma Normal (<strong>2NF</strong>)</strong></td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Debe cumplir con la <strong>1NF</strong>.</li>
                                    <li>No debe haber <strong>dependencias parciales</strong> (atributos no clave que dependen solo de una parte de una clave primaria compuesta en lugar de depender completamente de la clave primaria).  </li>
                                    <li>Todos los atributos no clave deben depender completamente de la <strong>clave primaria</strong>.</li>
                                </ul>
                            </td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Elimina la <strong>dependencia parcial</strong> en claves primarias compuestas.</li>
                                    <li>Reduce la <strong>redundancia</strong> en tablas.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Tercera Forma Normal (<strong>3NF</strong>)</strong></td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Debe cumplir con la <strong>2NF</strong>.</li>
                                    <li>No debe haber <strong>dependencia transitiva</strong> (cuando un atributo no clave depende de otro atributo no clave, en lugar de depender directamente de la clave primaria) de atributos no clave sobre la clave primaria.</li>
                                </ul>
                            </td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Evita dependencias indirectas en la <strong>clave primaria</strong>.</li>
                                    <li>Mejora la <strong>integridad</strong> y <strong>consistencia</strong> de los datos.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Forma Normal de Boyce-Codd (<strong>BCNF</strong>)</strong></td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Debe cumplir con la <strong>3NF</strong>.</li>
                                    <li>Si hay una <strong>dependencia funcional</strong> (es una relación entre los atributos de una tabla en la que el valor de un atributo determina de manera única el valor de otro atributo).</li>
                                    <li>Si un atributo Y depende de X, X debe ser una <strong>superclave</strong> (un conjunto de uno o más atributos que puede identificar de manera única cada fila en una tabla) .</li>
                                </ul>
                            </td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Evita <strong>anomalías</strong> cuando hay más de una <strong>clave candidata</strong>.</li>
                                    <li>Es una versión más <strong>estricta</strong> de la <strong>3NF</strong>.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Cuarta Forma Normal (<strong>4NF</strong>)</strong></td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Debe cumplir con la <strong>3NF o BCNF</strong>.</li>
                                    <li>No debe haber <strong>dependencias multivaluadas</strong> (v).</li>
                                    <li>Si una relación contiene <strong>dos o más</strong>  dependencias multivaluadas independientes, se debe dividir en tablas separadas.</li>
                                </ul>
                            </td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Elimina la redundancia causada por dependencias multivaluadas.</li>
                                    <li>Evita anomalías de inserción, actualización y eliminación.</li>
                                    <li>Mejora la integridad de los datos, asegurando que cada relación represente una sola entidad o concepto.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Quinta Forma Normal (<strong>5NF</strong>)</strong></td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Debe cumplir con la <strong>4NF</strong>.</li>
                                    <li>No debe existir <strong>dependencia de unión</strong>: esto ocurre cuando una tabla puede descomponerse en varias sin pérdida de datos, pero la recombinación de estas tablas puede generar información redundante.</li>
                                    <li>Se debe dividir la tabla en sus componentes más pequeños solo si la reconstrucción de los datos mediante JOIN no genera inconsistencias ni redundancias.</li>
                                </ul>
                            </td>
                            <td>
                                <ul className='ul-sql-sm'>
                                    <li>Elimina redundancias debidas a dependencias de unión complejas.</li>
                                    <li>Evita anomalías que surgen cuando los datos se distribuyen en múltiples tablas interconectadas.</li>
                                    <li>Permite una estructura más modular y flexible para futuras expansiones de la base de datos.</li>
                                </ul>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <h3>Ejemplo:</h3>
                <p>Tabla sin normalizar:</p>
                <ul className='ul-sql'>
                    <li>No está en 1NF porque hay valores multivaluados en la columna <strong>Productos</strong>.</li>
                </ul>
                <table className='nf-tables'>
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>Cliente</th>
                            <th>Dirección</th>
                            <th>Productos</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                            <td>TV, Laptop</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>María López</td>
                            <td>Avenida 456</td>
                            <td>Celular</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                            <td>Tablet</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </table>
                <p>Realizamos la <strong>1NF</strong>:</p>
                <ul className='ul-sql'>
                    <li><strong>Valores Multivaluados Identificados:</strong> {`"Tv", "Laptop"`}. </li>
                    <li>Separamos los valores atómicos en la columna <strong>Productos</strong> para que cada registro este en una fila diferente.</li>
                </ul>
                <table className='nf-tables first-nf-table'>
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>Cliente</th>
                            <th>Dirección</th>
                            <th>Producto</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                            <td>TV</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                            <td>Laptop</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>María López</td>
                            <td>Avenida 456</td>
                            <td>Celular</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                            <td>Tablet</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </table>
                <p>Realizamos la <strong>2NF</strong>:</p>
                <ul className='ul-sql'>
                    <li><strong>Dependencias parciales identificadas: </strong> <strong>Cliente</strong> y <strong>Dirección</strong> dependen solo de <strong>ID Pedido</strong> y no de <strong>Producto</strong>.</li>
                    <li>Eliminamos las dependencias parciales separando los datos en dos tablas.</li>
                </ul>
                <table className='nf-tables two-nf-purchases'>
                    <caption>Tabla Pedidos</caption>
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>Cliente</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>María López</td>
                            <td>Avenida 456</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                        </tr>
                    </tbody>
                </table>
                <table className='nf-tables two-nf-purchase-details'>
                    <caption>Tabla Detalles de Pedido</caption>
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>Producto</th>
                            <th>Precio Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>TV</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Laptop</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Celular</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Tablet</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </table>
                <p>Realizamos la <strong>3NF</strong>:</p>
                <ul className='ul-sql'>
                    <li><strong>Dependencias Transitivas Identificadas:</strong> <strong>Dirección</strong> solo depende de <strong>Cliente</strong> y no de <strong>ID Pedido</strong>.</li>
                    <li>Creamos la tabla <strong>Clientes</strong> para eliminar las dependencias transitivas. </li>
                </ul>
                <table className='nf-tables third-nf-purchases'>
                    <caption>Tabla Pedidos</caption>
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>ID Cliente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>101</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>102</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>101</td>
                        </tr>
                    </tbody>
                </table>
                <table className='nf-tables third-nf-clients'>
                    <caption>Tabla Clientes</caption>
                    <thead>
                        <tr>
                            <th>ID Cliente</th>
                            <th>Nombre</th>
                            <th>Dirección</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>Juan Pérez</td>
                            <td>Calle 123</td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>María López</td>
                            <td>Avenida 456</td>
                        </tr>
                    </tbody>
                </table>
                <p>Realizamos la <strong>BCNF</strong>:</p>
                <ul className='ul-sql'>
                    <li><strong>Dependencias funcionales que no cumplen con BCNF</strong>: Si el precio de un producto es siempre el mismo, <strong>Precio Total</strong> depende solo de <strong>Producto</strong>, no de <strong>ID Pedido</strong>.</li>
                    <li>Movemos el precio de la tabla <strong>Detalles de Pedido</strong> a una nueva tabla de <strong>Productos</strong>.</li>
                </ul>
                <table className='nf-tables bc-nf-purchase-details'>
                    <caption>Tabla Detalles de Pedido</caption>
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>ID Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>201</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>202</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>203</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>204</td>
                        </tr>
                    </tbody>
                </table>
                <table className='nf-tables bc-nf-products'>
                    <caption>Tabla Productos</caption>
                    <thead>
                        <tr>
                            <th>ID Producto</th>
                            <th>Producto</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>201</td>
                            <td>TV</td>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <td>202</td>
                            <td>Laptop</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>203</td>
                            <td>Celular</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>204</td>
                            <td>Tablet</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </table>
                <p>Realizamos la <strong>4NF</strong>:</p>
                <ul className='ul-sql'>
                    <li><strong>Dependencias multivaluadas</strong>: Un cliente puede tener múltiples direcciones.</li>
                    <li>Movemos las direcciones a una nueva tabla.</li>
                    <table className='nf-tables third-nf-clients'>
                        <caption>Tabla Clientes</caption>
                        <thead>
                            <tr>
                                <th>ID Cliente</th>
                                <th>Nombre</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>Juan Pérez</td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>María López</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='nf-tables third-nf-directions'>
                        <caption>Tabla Dirección Cliente</caption>
                        <thead>
                            <tr>
                                <th>ID Cliente</th>
                                <th>Dirección</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>101</td>
                                <td>Calle 123</td>
                            </tr>
                            <tr>
                                <td>102</td>
                                <td>Avenida 456</td>
                            </tr>
                        </tbody>
                    </table>
                </ul>
            </article>
        </>
    );
};

export default Normalization;
