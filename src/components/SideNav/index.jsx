import { Link } from 'react-router-dom';
import { ChevronDownIcon, CloseSideMenuIcon, CssIcon, Html5Icon, JavascriptIcon, NodeJSIcon, OpenSideMenuIcon, SQLIcon } from '../../assets/icons';
import { useState } from 'react';
import MyLink from '../MyLink';


import './styles.css';

const SideNav = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(true);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    }

    //Creating state for display each section
    const [sectionOpen, setSectionOpen] = useState({
        //Initial state for each section (false = close)
        html: true,
        css: false,
        javascript: false,
        react: false,
        sql: false,
        nodejs: false
    });
    //Function to Open or Close the section
    const toggleDisplaySection = (sectionName) => {
        //Using the update function for the closest state
        setSectionOpen(prev => ({
            ...prev, //Here we copy the previous state {html: false, css: false}
            [sectionName]: !prev[sectionName] //Now with the parameter we toggle the sate (Ej. [html]: !html[false] = html[true])
        }));
    };

    //Const for justify de content
    const sectionsClosed = Object.values(sectionOpen).every(value => value === false);

    return (
        <>
            <div className={`side-nav ${isSideNavOpen ? "translate-x-0 w-[30%] " : "-translate-x-[89%] w-[5%] h-[100vh] "} `}>
                <aside>
                    <div className="aside-logo"></div>
                    <div className="aside-container">
                        <nav className={`main-nav ${sectionsClosed ? "justify-center gap-10" : "justify-top gap-5"}`}>
                            <div className="nav-section">
                                <button onClick={() => toggleDisplaySection("html")}>
                                    {sectionOpen.html === false ? (
                                        <ChevronDownIcon className="toggle-section-icon section-close-icon" />
                                    ) : (
                                        <ChevronDownIcon className="toggle-section-icon section-open-icon" />
                                    )}
                                </button>
                                <Link to='/html'>
                                    <div className='nav-link'>
                                        <div className="section-icon">
                                            <Html5Icon />
                                        </div>
                                        <h2>Html</h2>
                                    </div>
                                </Link>
                            </div>
                            <ol className={` ${sectionOpen.html ? "flex" : "hidden"}`}>
                                <li>Fundamentos de HTML</li>
                                <li>Estructura y organización del contenido</li>
                                <li>HTML Semántico y Buenas Prácticas</li>
                                <li>Multimedia e Interactividad</li>
                                <li>Optimización y SEO en HTML</li>
                                <li>HTML Avanzado</li>
                            </ol>
                            <div className="nav-section">
                                <button onClick={() => toggleDisplaySection("css")}>
                                    {sectionOpen.css === false ? (
                                        <ChevronDownIcon className="toggle-section-icon section-close-icon" />
                                    ) : (
                                        <ChevronDownIcon className="toggle-section-icon section-open-icon" />
                                    )}
                                </button>
                                <Link to='/css'>
                                    <div className='nav-link'>
                                        <div className="section-icon">
                                            <CssIcon />
                                        </div>
                                        <h2>Css</h2>
                                    </div>
                                </Link>
                            </div>
                            <ol className={`${sectionOpen.css ? "flex" : "hidden"} `} >
                                <li>Fundamentos de CSS</li>
                                <li>Selectores y Especificidad</li>
                                <li>Colores, Fondos y Bordes</li>
                                <li>Tipografía y Estilos de Texto</li>
                                <li>Modelo de Caja (Box Model)</li>
                                <li>Posicionamiento y Diseño de Página</li>
                                <li>Flexbox (Diseño Responsivo y Flexible)</li>
                                <li>CSS Grid (Diseño Complejo y Responsivo)</li>
                                <li>Transiciones, Animaciones y Transformaciones</li>
                                <li>Responsive Design y Media Queries</li>
                                <li>Buenas Prácticas y Optimización en CSS</li>
                            </ol>
                            <div className="nav-section">
                                <button onClick={() => toggleDisplaySection("javascript")}>
                                    {sectionOpen.javascript === false ? (
                                        <ChevronDownIcon className="toggle-section-icon section-close-icon" />
                                    ) : (
                                        <ChevronDownIcon className="toggle-section-icon section-open-icon" />
                                    )}
                                </button>
                                <Link to='/javascript'>
                                    <div className='nav-link'>
                                        <div className="section-icon">
                                            <JavascriptIcon />
                                        </div>
                                        <h2>Javascript</h2>
                                    </div>
                                </Link>
                            </div>
                            <ol className={`${sectionOpen.javascript ? "flex" : "hidden"} `} >
                                <li>Fundamentos de JavaScript</li>
                                <li>Operadores y Condicionales</li>
                                <li>Funciones y Ámbito de Variables</li>
                                <li>Bucles e Iteraciones</li>
                                <li>Arrays y Objetos</li>
                                <li>Manipulación del DOM</li>
                                <li>Programación Orientada a Objetos (POO)</li>
                                <li>Promesas, Async/Await y Fetch API</li>
                                <li>LocalStorage, SessionStorage y JSON</li>
                                <li>Módulos en JavaScript </li>
                                <li>Frameworks y Librerías</li>
                                <li>Buenas Prácticas y Patrones de Diseño</li>
                            </ol>
                            <div className="nav-section">
                                <button onClick={() => toggleDisplaySection("sql")}>
                                    {sectionOpen.sql === false ? (
                                        <ChevronDownIcon className="toggle-section-icon section-close-icon" />
                                    ) : (
                                        <ChevronDownIcon className="toggle-section-icon section-open-icon" />
                                    )}
                                </button>
                                <Link to='/sql'>
                                    <div className='nav-link'>
                                        <div className="section-icon">
                                            <SQLIcon />
                                        </div>
                                        <h2>SQL</h2>
                                    </div>
                                </Link>
                            </div>
                            <ol className={`${sectionOpen.sql ? "flex" : "hidden"} `} >
                                <li ><MyLink to='/sql' sectionId='sql-fundamentals' >Fundamentos de SQL</MyLink> </li>
                                <li ><MyLink to='/sql' sectionId='db-fundamentals' >Fundamentos de una Base de Datos</MyLink> </li>
                                <li ><MyLink to='/sql' sectionId='dbms'>Sistema de Gestión de Bases de Datos(SGBD)</MyLink> </li>
                                <li ><MyLink to='/sql' sectionId='objects-in-db'>Objetos en Bases de Datos</MyLink></li>
                                <li ><MyLink to='/sql' sectionId='important-commands'>Comandos Importantes de SQL</MyLink></li>
                                <li ><MyLink to='/sql' sectionId='data-types'>Tipos de Datos en SQL</MyLink></li> 
                                <li ><MyLink to='/sql' sectionId='basic-operations'>Operaciones básicas en SQL</MyLink></li>       
                                <li ><MyLink to='/sql' sectionId='er-model'>Modelo Entidad-Relación (ER)</MyLink></li>
                                <li ><MyLink to='/sql' sectionId='normalization'>Normalización en SQL</MyLink></li>    
                            </ol>
                            <div className="nav-section">
                                <button onClick={() => toggleDisplaySection("nodejs")}>
                                    {sectionOpen.nodejs === false ? (
                                        <ChevronDownIcon className="toggle-section-icon section-close-icon" />
                                    ) : (
                                        <ChevronDownIcon className="toggle-section-icon section-open-icon" />
                                    )}
                                </button>
                                <Link to='/nodejs'>
                                    <div className='nav-link'>
                                        <div className="section-icon">
                                            <NodeJSIcon />
                                        </div>
                                        <h2>Node JS</h2>
                                    </div>
                                </Link>
                            </div>
                            <ol className={`${sectionOpen.nodejs ? "flex" : "hidden"} `} >
                                <li ><MyLink to='/nodejs' sectionId='nodejs-fundamentals' >Fundamentos de Node Js</MyLink> </li>
                                <li ><MyLink to='/nodejs' sectionId='nodejs-asynchronism' >Asincronismo en Node Js</MyLink> </li>  
                            </ol>
                        </nav>
                    </div>
                </aside>
                <div className='toggle-sidenav-btn-container'>
                    <button onClick={() => toggleSideNav()}>
                        {isSideNavOpen === false ? (
                            <OpenSideMenuIcon className="toggle-sidenav-btn-icon" />
                        ) : (
                            <CloseSideMenuIcon className="toggle-sidenav-btn-icon" />
                        )}
                    </button>
                </div>
            </div>
        </>
    );
};

export default SideNav; 