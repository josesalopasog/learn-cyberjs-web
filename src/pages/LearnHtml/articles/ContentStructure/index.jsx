import CodeHighlighter from '../../../../components/CodeHighlighter';
import './styles.css';

const ContentStructure = () => {
    return (
        <>
            <article className='html-structure-article'>
                <h2 className='gradient-text'>Estructura y orgnanización del contenido</h2>
                <p>
                    A continuación te muestro la estructura base de un archivo html. Esto lo puedes
                    comprobar en tu <strong>VsCode (Visual Studio Code)</strong>. Primero crea un archivo cualquiera con la extensión .html,
                    abrea el archivo en VsCode, ahora escribe el caracter <strong>!</strong> y presiona la tecla TAB, te debera mostrar algo como esto:
                </p>
                <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" />
                <p>¿Que significa cada linea? Te explico:</p>
                <div className='html-structure-explication-container'>
                    <div className='html-structure-explication'>
                        <p>Línea <strong>1</strong>:</p>
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={1} />
                        <p>
                            Se usa para indicarle al navegador qué <strong>versión de HTML</strong> debe interpretar y
                            así <strong>garantizar una renderización correcta</strong> de la pagina web. Esto se simplifico con HTML5 ya que antes
                            se usaban versiones mas complicadas como HTML4.01 o XHTML 1.0. Hoy en día, siempre se incluye esta línea
                            ya que es una buena practica que sirve para asegurar que los navegadores usen el modo estandar de renderización, aunque 
                            no es obligatoria.
                        </p>
                    </div>
                    <div className='html-structure-explication'>
                        <p>Líneas <strong>2</strong> y <strong>12</strong>:</p>
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={2} />
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={12} />
                        <p>
                            Esta es la <strong>etiqueta raíz</strong> del documento y <strong>envuelve todo el contenido de la página.</strong> Sirven para indicarle al navegador
                            que ese contenido hace referencia a un archivo HTML. Estas etiquetas no son obligatorias pero es una buena
                            practica incluirlas ya que aunque los navegadores modernos pueden interpretar que es codigo sin ellas, puede que
                            algunos cuasen problemas de renderización.
                        </p>
                        <p>
                            La parte de <strong>{`lang="es"`}</strong> es un <strong>atributo</strong> que se le agrega a la etiqueta html para indicarle
                            al navegador que el contenido esta en español. Esto es importante para los motores de busqueda ya que les ayuda a
                            identificar el idioma del contenido y asi mostrarlo a los usuarios que buscan en ese idioma.
                        </p>
                    </div>
                    <div className='html-structure-explication'>
                        <p>Líneas <strong>3</strong> y <strong>7</strong>:</p>
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={3} />
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={7} />
                        <p>
                            Las etiquetas <strong>HEAD</strong> son las encargadas de contener los <strong>metadatos</strong> de la página web. Contine información importante
                            como el <strong>titulo de la página, el icono de la página, la descripción, palabras clave, la hoja de estilos, scripts, etc.</strong> Esta información
                            no se muestra en la página web pero es importante para los motores de busqueda y para el navegador.
                        </p>
                    </div>
                    <div className='html-structure-explication'>
                        <p>Líneas <strong>4</strong> y <strong>5</strong>:</p>
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={4} />
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={5} />
                        <p>
                            Las etiqutas <strong>META</strong> son  las encargadas de proporcionar los <strong>metadatos</strong> de la página web que mencionamos arriba.
                            Estos metadatos son información sobre la página que no se muestra en la página web pero es importante para los motores de busqueda y para el navegador.                            
                        </p>
                        <p>Estos son algunos de los atributos más comunes de la etiqueta <strong>META</strong>:</p>
                        <table>
                            <thead>
                                <tr>
                                    <th>Atributo</th>
                                    <th>Función</th>
                                    <th>Ejemplo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>charset</code></td>
                                    <td>Define la codificación de caracteres del documento.</td>
                                    <td><code>&lt;{`meta`} <strong>{`charset="UTF-8"`}</strong>&gt;</code></td>
                                </tr>
                                <tr>
                                    <td><code>name</code></td>
                                    <td>Especifica el tipo de metadato.</td>
                                    <td><code>&lt;{`meta`} <strong>{`name="author"`}</strong>  {`content="José Salopaso"`}&gt;</code></td>
                                </tr>
                                <tr>
                                    <td><code>content</code></td>
                                    <td>Contiene el valor del metadato.</td>
                                    <td><code>&lt;{`meta name="description"`} <strong>{`content="Esta es mi página web"`}</strong>&gt;</code></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>En el ejemplo de las etiquetas META que nos entrega VsCode, podemos ver dos:</p>
                        <p>
                            El atributo <strong>{`charset="UTF-8"`} </strong> como vimos arriba hace referencia a la codifcicación 
                            de caracteres del documento. Se usa UTF-8 (Unicode Transformation Format - 8bit) ya que permite representar
                            casi todos los caracteres de los idiomas del mundo. Practicamente <strong> es el estándar más utilizado en la web</strong>
                            permitiendo caracteres como ñ, á, é, ü, ç, ¿, ¡, ©, ™, etc.
                        </p>
                        <p>
                            El atributo <strong>{`name="viewport"`}</strong> es un atributo especial que se usa para <strong>ajustar la página web a dispositivos móviles.</strong>
                            En español <strong>viewport</strong> significa <strong>ventana de visualización</strong> oséa, el área visible de la página web en un dispositivo.
                            El atributo de <strong>{`content="width=device-width"`}</strong> hace que el viewport coincida con el ancho físico del dispositivo e <strong>initial-scale=1.0</strong> hace que la página
                            se muestre con un zoom del 100%. 
                        </p>
                    </div>
                    <div className='html-structure-explication'>
                        <p>Línea <strong>6</strong>:</p>
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={6} />
                        <p>
                            La etiqueta <strong>TITLE</strong> es la encargada de <strong>definir el titulo de la página web</strong> que se muestra en la pestaña del navegador.
                            Es importante para los motores de busqueda ya que es uno de los factores más importantes para el <strong>SEO (Search Engine Optimization)</strong>.
                        </p>
                        <p>
                            Por ultimo, puedes agregar la etiqueta img para agregar un icono a la pestaña del navegador. Esto se hace con la etiqueta <strong>link</strong> y el atributo <strong>{`rel="icon"`}</strong>.
                            El atributo <strong>href</strong> es la dirección de la imagen que quieres usar como icono y el atributo <strong>sizes</strong> es el tamaño del icono.
                            Para los iconos de pestaña se recomienda usar un tamaño de <strong>32x32 pixeles</strong>.
                        </p>

                        <div className='head-example'>
                            <div>{`<head></head>`} </div>
                            <div className="head-example-content">
                                <div className='img-head-example'>{`<img /> `}</div>
                                <div className='title-head-example'>{`<title></title>`}</div>
                            </div>
                        </div>
                    </div>
                    <div className='html-structure-explication'>
                        <p>Líneas <strong>8</strong> y <strong>11</strong>:</p>
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={8} />
                        <CodeHighlighter filePath="../../../public/content/htmlExample.html" language="html" lineNumber={11} />
                        <p>
                            Por ultimo tenemos, la etiqueta <strong>BODY</strong> esta es la encargada de <strong>envolver todo el contenido visible de la página web</strong> como textos, imagenes, videos, etc.
                            Pero para esto es muy importante conocer sobre que es HTML semantico y cuales son las buenas practicas.             
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default ContentStructure;