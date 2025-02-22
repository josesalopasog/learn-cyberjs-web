import './styles.css';

const InteractiveHTML = () => {
    return (
        <>
            <article className='multimedia-html-article'>
                <h2 className='gradient-text'>Etiquetas de Formularios e Interactividad</h2>
                <p>
                    En HTML existen varias etiquetas que nos permiten interactuar con los usuarios y crear formularios en las paginas web. Estas etiquetas son muy
                    importantes ya que nos permiten recopilar informacion de los usuarios y crear paginas web mas interactivas.
                </p>
                <p>Las principales etiquetas que nos permiten mayor interactividad son las siguientes:</p>
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
                        <td><code>{`<form></form>`}</code></td>
                        <td>Formulario</td>
                        <td>Define el contenedor principal del formulario.</td>
                    </tr>
                    <tr>
                        <td><code>{`<a>`}</code> </td>
                        <td>Enlace</td>
                        <td>Permite crear enlaces a otras paginas web, documentos, imagenes, etc.</td>
                    </tr>
                    <tr>
                        <td><code>{`<button>`}</code> </td>
                        <td>Boton</td>
                        <td>Permite crear botones en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<input>`}</code> </td>
                        <td>Entrada de Datos</td>
                        <td>Permite al usuario introducir datos en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<select>`}</code> </td>
                        <td>Seleccion</td>
                        <td>Permite al usuario seleccionar una o varias opciones de una lista desplegable.</td>
                    </tr>
                    <tr>
                        <td><code>{`<textarea>`}</code> </td>
                        <td>Area de Texto</td>
                        <td>Permite al usuario introducir texto en un area de texto.</td>
                    </tr>
                    <tr>
                        <td><code>{`<label>`}</code> </td>
                        <td>Etiqueta</td>
                        <td>Permite asociar un texto a un elemento de entrada de datos.</td>
                    </tr>
                    <tr>
                        <td>{`<details> + <summary>`}</td>
                        <td>Detalles</td>
                        <td>Permite mostrar u ocultar detalles adicionales en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<progress>`}</code> </td>
                        <td>Progreso</td>
                        <td>Permite mostrar el progreso de una tarea en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<meter>`}</code> </td>
                        <td>Medidor</td>
                        <td>Permite mostrar un valor numerico en un rango especifico.</td>
                    </tr>
                    <tr>
                        <td><code>{`<menu>`}</code> </td>
                        <td>Menu</td>
                        <td>Permite crear menus en la pagina web.</td>
                    </tr>
                </tbody>                
            </table>
            </article>
        </>
    );
};

export default InteractiveHTML;