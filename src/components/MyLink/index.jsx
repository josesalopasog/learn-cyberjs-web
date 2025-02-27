import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";

const MyLink = ({to, sectionId, children}) => { 
    MyLink.propTypes = {
        to: PropTypes.string.isRequired,
        sectionId: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired, // Nueva prop opcional
    }
    
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        if(location.pathname === to){
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({behavior:"smooth"});
            }
        } else {
            navigate(to);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({behavior:"smooth"});
                }
            }, 100)
        }
    };

    return(
        <a href={`${to}#${sectionId}`} onClick={handleClick}>
            {children}
        </a>
    );
};

export default MyLink;