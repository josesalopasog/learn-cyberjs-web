import PropTypes from "prop-types";
import "./styles.css"
import SideNav from "../SideNav";
import Header from "../Header"
import Footer from "../Footer"

const Layout = ({ children }) => {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    };
    return (
        <>  
            <Header/>      
            <SideNav />          
            <main>
                <div className="main-content">
                    {children}       
                </div>
                <footer> 
                    <Footer />
                </footer>                     
            </main>
        </>
    );
}

export default Layout;