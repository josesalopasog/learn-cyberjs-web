import HTMLExample from '../HTMLExample';
import TableExample from '../TableExample';
import CodeHighlighter from '../../../../components/CodeHighlighter';

import './styles.css';

const SemanticHTML = () => {
    return (
        <>
        <article className='semantic-html-article'>
            <h2 className='gradient-text'>HTML Semántico y Buenas Prácticas</h2> 
            <HTMLExample />
            <p>
                Como estabamos diciendo,en la etiqueta <strong>BODY</strong> vamos a colocar
                todo el contenido de nuestra página web. Para esto, podemos usar varias etiquetas que nos
                permiten estructurar nuestro contenido de una manera más semántica.  
             </p>
             <p>
                Esto es una buena practica
                ya que esto ayudo a los navegadores y motores de busqueda a <strong>entender mejor el contenido</strong> que queremos
                mostrar, mejora la <strong>optimización del SEO</strong> y la manera que le daremos <strong>mantenimiento</strong> a nuestro codigo.
             </p>
             <p>En grafico de arriba puedes ver un ejemplo de algunas de las etiquetas mas usadas para estructurar nuestro contenido de una 
                manera semantcica. Puesto que existe <strong>más de 100 etiquetas oficiales</strong> según las especificación actual de HTML5, solamente
                te voy a explicar las más comunes:
             </p>
             <h3>Principales etiquetas semanticas:</h3>
             <table>
                <thead>
                    <tr>
                        <th>Etiqueta</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>{`<header></header>`}</code> </td>
                        <td>Cabecera</td>
                        <td>Se utiliza para definir la cabecera de un documento o sección.</td>
                    </tr>
                    <tr>
                        <td><code>{`<nav></nav>`}</code> </td>
                        <td>Navegación</td>
                        <td>Se utiliza para definir la navegación de un documento o sección.</td>       
                    </tr>
                    <tr>
                        <td><code>{`<main></main>`}</code> </td>
                        <td>Principal</td>
                        <td>Se utiliza para definir el contenido principal de un documento o sección.</td>          
                    </tr>
                    <tr>
                        <td><code>{`<article></article>`}</code> </td>
                        <td>Artículo</td>
                        <td>Se utiliza para definir un artículo independiente en un documento.</td> 
                    </tr>
                    <tr>
                        <td><code>{`<section></section>`}</code> </td>
                        <td>Sección</td>
                        <td>Se utiliza para definir una sección en un documento.</td>   
                    </tr>
                    <tr>
                        <td><code>{`<p></p>`}</code> </td>
                        <td>Párrafo</td>
                        <td>Se utiliza para definir una parrafo en un documento.</td>   
                    </tr>
                    <tr>
                        <td><code>{`<aside></aside>`}</code> </td>
                        <td>Sección lateral</td>
                        <td>Se utiliza para definir contenido relacionado con el contenido principal.</td>
                    </tr>
                    <tr>
                        <td><code>{`<footer></footer>`}</code> </td>
                        <td>Pie de página</td>
                        <td>Se utiliza para definir el pie de un documento o sección.</td>
                    </tr>
                    <tr>
                        <td><code>{`<strong></strong>`}</code> </td>
                        <td>Negrita</td>
                        <td>Se utiliza para poner una parte del contenido/texto en negrilla indicando que tiene una importancia semántica.</td>
                    </tr>
                    <tr>
                        <td><code>{`<em></em>`}</code> </td>
                        <td>Enfasis</td>
                        <td>Se utiliza para poner una parte del contenido/texto en cursiva indicando que debe ser enfatizado, ya sea porque es importante, tiene un tono diferente o requiere atención especial.</td>
                    </tr>
                </tbody>
             </table>
             <p>Tambien estan las etiquetas para los títulos y los subtítulos:</p>
             <table>
                <thead>
                    <tr>
                        <th>Etiqueta</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>{`<h1></h1>,<h2>...<h6></h6>`}</code> </td>
                        <td>Títulos y Subtítulos</td>
                        <td>La etiqueta h1 se usa para el título principal, seguido de h2 hasta h6 para los subtítulos, mantenimiento una jerarquía lógica entre ellos.</td>
                    </tr>
                </tbody>
             </table>
             <h3>Etiquetas no semanticas:</h3>
             <table>
                <thead>
                    <tr>
                        <th>Etiqueta</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>{`<div></div>`}</code> </td>
                        <td>División</td>
                        <td>Se utiliza como un contenedor genérico para agrupar elementos, scripts o estilos. Se usa cuando el elemento no se puede definir con etiquetas semanticas.</td>
                    </tr>
                    <tr>
                        <td><code>{`<span></span>`}</code> </td>
                        <td>Extender o Abarcar</td>
                        <td>Se usa para aplicar estilos o scripts a parte de un contenido/texto que ya esta dentro de otra etiqueta.</td>       
                    </tr>
                    <tr>
                        <td><code>{`<b></b>`}</code> </td>
                        <td>Negrilla</td>
                        <td>Al contrarío que la etiqueta {`<strong>`} esta solo se usa para poner una parte del contenido/texto en negrilla sin ningun significado especial.</td>          
                    </tr>
                    <tr>
                        <td><code>{`<i></i>`}</code> </td>
                        <td>Cursiva</td>
                        <td>Al contrarío que la etiqueta {`<em>`} esta solo se usa para poner una parte del contenido/texto en cursiva sin ningun significado especial.</td>     
                    </tr>
                </tbody>
             </table>
            <h3>Tablas</h3>
            <p>
                Las <strong>tablas</strong> en HTML no se consideran etiquetas semánticas como tal, pero pueden llegar a usarse de maneta semántica dependiendo del contexto en el que se utilicen.Las 
                tablas se construyen con las siguientes etiquetas: 
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Etiqueta</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>{`<table></table>`}</code> </td>
                        <td>Tabla</td>
                        <td>Se utiliza para definir una tabla en un documento.</td>
                    </tr>
                    <tr>
                        <td><code>{`<thead></thead>`}</code> </td>
                        <td>Encabezado de Tabla</td>
                        <td>Se utiliza para definir el encabezado de una tabla.</td>    
                    </tr>
                    <tr>
                        <td><code>{`<tbody></tbody>`}</code> </td>
                        <td>Cuerpo de Tabla</td>
                        <td>Se utiliza para definir el cuerpo de una tabla.</td>
                    </tr>
                    <tr>
                        <td><code>{`<tfoot></tfoot>`}</code> </td>
                        <td>Pie de Tabla</td>
                        <td>Se utiliza para definir el pie de una tabla.</td>
                    </tr>
                    <tr>
                        <td><code>{`<caption></caption>`}</code> </td>
                        <td>Titulo de Tabla</td>
                        <td>Se utiliza para definir el título de una tabla.</td>
                    </tr>
                    <tr>
                        <td><code>{`<tr></tr>`}</code> </td>
                        <td>Fila</td>
                        <td>Se utiliza para definir una fila en una tabla.</td> 
                    </tr>
                    <tr>
                        <td><code>{`<th></th>`}</code> </td>
                        <td>Celda de Encabezado</td>
                        <td>Se utiliza para definir una celda de encabezado en una tabla.</td>
                    </tr>
                    <tr>
                        <td><code>{`<td></td>`}</code> </td>
                        <td>Celda</td>
                        <td>Se utiliza para definir una celda en una tabla.</td>
                    </tr>
                </tbody>                
            </table>
            <p>Representación grafica:</p>
            <TableExample />
            <p>Codigo ejemplo: </p>
            <CodeHighlighter filePath="../../../../../public/content/htmlTableExample.html" language="html"/>
            
        </article>    
        </>
    );
};

export default SemanticHTML;