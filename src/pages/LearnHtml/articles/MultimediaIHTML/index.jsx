import './styles.css';

const MultimediaHTML = () => {
    return (
        <>
            <article className='multimedia-html-article'>
                <h2 className='gradient-text'>Etiquetas de Multimedia</h2>
                <p>
                    En HTML existen etiquetas que permiten insertar contenido multimedia como videos, imágenes, audios y animaciones, para hacer
                    que las paginas web sean mas visuales y atractivas. 
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
                        <td><code>{`<img>`}</code> </td>
                        <td>Imagenes</td>
                        <td>Permite insertar imagenes en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<video>`}</code> </td>
                        <td>Video</td>
                        <td>Permite insertar videos en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<audio>`}</code> </td>
                        <td>Audio</td>
                        <td>Permite insertar audio en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<canvas>`}</code> </td>
                        <td>Canvas</td>
                        <td>Permite dibujar graficos, animaciones y juegos en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<svg>`}</code> </td>
                        <td>SVG</td>
                        <td>Permite insertar imagenes vectoriales en la pagina web.</td>
                    </tr>
                    <tr>
                        <td><code>{`<iframe>`}</code> </td>
                        <td>IFrame</td>
                        <td>Permite insertar contenido de otras paginas web en la pagina web.</td>
                    </tr>
                </tbody>                
            </table>
            </article>
        </>
    );
};

export default MultimediaHTML;