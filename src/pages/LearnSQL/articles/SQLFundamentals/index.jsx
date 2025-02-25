import './styles.css';

const SQLFundamentals = () => {
    return (
        <>
            <article className='sql-fundamentals-article'>
                <h2 className='gradient-text'>Fundamentos de SQL</h2>
                <p>
                    SQL <strong>(Structured Query Language / Lenguaje de Consulta Estructurado)</strong> es un lenguaje de programación utilizado diseñado para 
                    <strong> gestionar bases de datos relacionales</strong>. Actualmente, es el estándar mas utilizado para interactuar con sistemas
                    de gestión de vases de datos com MySQL, PostgreSQL, SQLite, Oracle, SQL Server, entre otros.
                </p>
                <p>
                    ¿Para que se usa SQL?
                </p>
                <ul className='ul-sql'>
                    <li>Crear bases de datos.</li>
                    <li>Modificar bases de datos.</li>
                    <li>Insertar datos en bases de datos.</li>
                    <li>Actualizar datos en bases de datos.</li>
                    <li>Eliminar bases de datos.</li>
                    <li>Consultar y recuperar bases de datos.</li>
                    <li>Definir la estructura de la bases de datos</li>
                    <li>Administrar la seguridad y el Control de acceso</li>
                </ul>
            </article>
        </>
    );
};

export default SQLFundamentals;