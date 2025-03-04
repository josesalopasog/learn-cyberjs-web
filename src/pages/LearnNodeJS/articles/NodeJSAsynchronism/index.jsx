import './styles.css';

const NodeJSAsynchronism = () => {
    return (
        <>
            <article className='nodejs-asynchronism' id='nodejs-asynchronism'>
                <h2 className='gradient-text'>Asincronismo en Node JS</h2>
                <p>
                    El <strong>asincronismo</strong> en Node.js es un <strong>modelo de ejecución</strong> que permite realizar <strong>múltiples
                    tareas sin bloquear el hilo principal</strong>. Esto es clave para la <strong>eficiencia y escalabilidad </strong>
                    de las aplicaciones, especialmente en operaciones de <strong>entrada/salida (E/S)</strong> como leer archivos,
                    consultar bases de datos o realizar peticiones HTTP.
                </p>
                <div className='video-container'>
                    <video src='/public/videos/eventloop-nodejs.mp4' controls />
                </div>
                <h3 className='gradient-text-nodejs-h3'>¿Que es Event Loop?</h3>
                <p>
                    El <strong>Event Loop</strong> en Node.js es un <strong>bucle que se ejecuta constantemente</strong>, permitiendo gestionar de
                    forma asíncrona la <strong>ejecución de tareas</strong>, manejando eventos, callbacks y operaciones no bloqueantes
                    en el código.
                </p>
                <h4>Como funciona el Event Loop:</h4>
                <ol className='ol-learn'>
                    <li>Ejecuta <strong>código síncrono</strong> en el <strong>Call Stack</strong>.</li>
                    <li>Maneja tareas asíncronas enviándolas a colas específicas (Timers, Event Queue, Microtasks, etc.).</li>
                    <li>Revisa el Call Stack:
                        <ul>
                            <li>Si está vacío, toma tareas pendientes de las colas y las ejecuta.</li>
                        </ul>
                    </li>
                    <li>Repite el proceso indefinidamente (bucle infinito).</li>
                </ol>
                <h3>¿Que es el Event Queue?</h3>
                <p>
                    El <strong>Event Queue</strong> (Cola de Eventos) en Node.js es una cola donde <strong>se almacenan los callbacks</strong> de tareas asíncronas
                    que están listas para ejecutarse en el Call Stack, pero deben esperar a que este esté libre.
                </p>
                <h4>Se usa para: </h4>
                <ul className='ul-learn'>
                    <li>Callbacks de <code>setTimeout()</code> y <code>setInterval()</code> (cuando el tiempo se cumple).</li>
                    <li>Callbacks de <code>setImmediate()</code>.</li>
                    <li>Callbacks de operaciones de I/O (como lectura de archivos o respuestas de red).</li>
                </ul>
                <h4>Como funciona:</h4>
                <ol className='ol-learn'>
                    <li>Cuando una operación asíncrona se completa, su callback se envía a la <strong>Event Queue</strong>.</li>
                    <li>El <strong>Event Loop</strong> revisa si el <strong>Call Stack</strong> está vacío.</li>
                    <li>Si está libre, el callback se mueve al <strong>Call Stack</strong> y se ejecuta.</li>
                </ol>
                <h3>¿Que es el Thread Pool?</h3>
                <p>
                    El <strong>Thread Pool</strong> (o grupo de hilos) en Node.js es un conjunto de hilos en segundo plano que se utilizan para ejecutar
                    tareas intensivas en CPU o bloqueantes sin afectar el hilo principal del Event Loop.
                </p>
                <h4>Se usa para operaciones como:</h4>
                <ul className='ul-learn'>
                    <li>Acceso a archivos (<code>fs.readFile</code>, <code>fs.writeFile</code>).</li>
                    <li>Cifrado y hashing (<code>crypto.pbkdf2</code>, <code>crypto.randomBytes</code>).</li>
                    <li>Compresión (<code>zlib.deflate</code>, <code>zlib.gzip</code>).</li>
                    <li>Consultas DNS (<code>dns.lookup</code>).</li>
                </ul>
                <h4>Características:</h4>
                <ul className='ul-learn'>
                    <li>Usa la biblioteca <strong>libuv</strong> para administrar los hilos.</li>
                    <li>Tiene <strong>4 hilos por defecto</strong>, pero se puede configurar con <code>UV_THREADPOOL_SIZE</code>.</li>
                    <li>Solo se usa para tareas que requieren <strong>procesamiento intensivo</strong>, ya que la mayoría del código en Node.js es <strong>monohilo</strong> y <strong>no bloqueante</strong>.</li>
                </ul>
            </article>
        </>
    );
};

export default NodeJSAsynchronism;