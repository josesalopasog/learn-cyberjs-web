import './styles.css';


const HTMLExample = () => {
    return (
        <>
            <div className='html-example'>
                <div className='body-title-example'>{`<body></body>`} </div>
                <div className='body-example'>
                    <header className='header-example'>
                        <div className='img-example'>{`<img />`}</div>
                        <div className='header-content-example'>{`<header></header>`}</div>
                        <nav className='nav-example'>{`<nav></nav>`}</nav>
                    </header>
                    <main className='main-example'>
                        <div className='main-content-example-title'>{`<main></main>`}</div>
                        <div className='main-content-example'>
                            <aside className='aside-example'>{`<aside></aside>`}</aside>
                            <section className='section-example'>
                                <div>{`<section></section>`}</div>
                                <h1 className='h1-example' >{`<h1></h1>`}</h1>
                                <p className='p-example' >{`<p></p>`}</p>
                            </section>
                        </div>
                    </main>
                    <footer className='footer-example'>{`<footer></footer>`}</footer>
                </div>
            </div>
        </>
    );
};

export default HTMLExample;