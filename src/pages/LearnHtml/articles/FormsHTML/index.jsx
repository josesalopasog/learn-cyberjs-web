import './styles.css';

const FormsHTML = () => {
    return (
        <>
            <article className='multimedia-html-article'>
                <h2 className='gradient-text'>Formularios en HTML</h2>
                <p>
                    Los formularios en HTML son una parte importante de las paginas web, ya que permiten a los usuarios introducir datos en la pagina web, como por ejemplo
                    nombre, correo electronico, contraseña, etc. Los formularios se crean utilizando la etiqueta <code>{`<form>`}</code> y dentro de esta etiqueta se pueden
                    incluir diferentes tipos de elementos de entrada de datos como campos de texto, botones, casillas de verificación, etc.
                </p>
                <p>Algunos de los elementos mas comunes que se utilizan en los formularios son los siguientes:</p>
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
                        <td><code>{`<form></form>`} </code></td>
                        <td>Formulario</td>
                        <td>Permite crear un formulario en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<input>`}</code> </td>
                        <td>Entrada de Datos</td>
                        <td>Permite al usuario introducir datos en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<textarea>`}</code> </td>
                        <td>Area de Texto</td>
                        <td>Permite al usuario introducir texto en un area de texto.</td>
                    </tr>
                    <tr>
                        <td><code>{`<button>`}</code> </td>
                        <td>Boton</td>
                        <td>Permite crear botones en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<select>`}</code> </td>
                        <td>Seleccion</td>
                        <td>Permite al usuario seleccionar una o varias opciones de una lista desplegable.</td>
                    </tr>
                    <tr>
                        <td><code>{`<label>`}</code> </td>
                        <td>Etiqueta</td>
                        <td>Permite asociar un texto a un elemento de entrada de datos.</td>
                    </tr>
                    <tr>
                        <td><code>{`<fieldset>`}</code> </td>
                        <td>Grupo de Campos</td>
                        <td>Permite agrupar varios elementos de entrada de datos en un grupo.</td>
                    </tr>
                    <tr>
                        <td><code>{`<legend>`}</code> </td>
                        <td>Titulo de Grupo</td>
                        <td>Permite agregar un titulo a un grupo de campos.</td>
                    </tr>
                    
                </tbody>                
            </table>
            </article>
        </>
    );
};

export default FormsHTML;