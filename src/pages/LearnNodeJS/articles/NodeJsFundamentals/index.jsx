
const NodeJSFundamentals = () => {
    return (
        <>
            <article className='nodejs-fundamentals' id='nodejs-fundamentals'>
                <h2 className='gradient-text'>Fundamentos de Node JS</h2>
                <p>
                    Node Js es un <strong>entorno de ejecución</strong> de JavaScript <strong>fuera del navegador</strong>, lo que significa
                    que no necesitas ningún navegador(Chrome, Opera, Firefox, etc) para ejecutar JavaScript.
                </p>
                <h3>Caracteristicas Principales</h3>
                <ul className='ul-learn'>
                    <li>
                        <strong>Basado en eventos y no bloqueante: </strong>
                        Node.js utiliza un modelo de programación <strong>orientado a
                            eventos</strong> y no bloqueante, lo que significa que las operaciones
                        de entrada y salida (I/O) <strong>no detienen la ejecución </strong>
                        del código mientras esperan una respuesta.
                    </li>
                    <li>
                        <strong>Modelo de entrada/salida asíncrona: </strong> 
                        Todas las operaciones de E/S, como la lectura de archivos, peticiones HTTP y 
                        consultas a bases de datos, se ejecutan de manera asíncrona, lo que mejora el rendimiento 
                        y la escalabilidad.
                    </li>
                    <li>
                        <strong>Uso del motor V8 de Google: </strong>
                        Node.js utiliza el motor V8 para ejecutar código JavaScript de manera rápida y eficiente, ya que este motor 
                        compila JavaScript directamente a código de máquina.
                    </li>
                    <li>
                        <strong>NPM (Node Package Manager): </strong> 
                        Node.js cuenta con un gestor de paquetes llamado NPM, que permite instalar 
                        y <strong>gestionar módulos y dependencias</strong> con facilidad.

                    </li>
                    <li>
                        <strong>Centrado en modulos: </strong> 
                        La arquitectura de Node JS está basada en pequeños bloques de código reutilizables llamados módulos. Estos módulos encapsulan 
                        funcionalidades específicas y pueden ser importados y exportados fácilmente para ser utilizados en diferentes partes de una aplicación.

                    </li>
                    <li>
                        <strong>Compatible con múltiples conexiones simultáneas: </strong>
                        Gracias a su modelo basado en eventos, Node.js puede manejar miles de conexiones simultáneas 
                        con un bajo consumo de recursos.
                    </li>
                    <li>
                        <strong>Gran comunidad y ecosistema: </strong> 
                        Al ser una tecnología popular, Node.js cuenta con una comunidad activa y una amplia variedad 
                        de librerías y frameworks disponibles para su uso.
                    </li>
                    <li>
                        <strong>Compatible con diversos frameworks y librerías: </strong>
                        Existen muchos frameworks como Express.js, NestJS y Koa.js que facilitan el desarrollo 
                        de aplicaciones con Node.js.
                    </li>
                </ul>
            </article>
        </>
    );
};

export default NodeJSFundamentals;