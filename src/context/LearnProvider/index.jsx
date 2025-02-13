import PropTypes from "prop-types"


export const LearnProvider = ({ children }) => {
    LearnProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return(
    <LearnProvider.Provider>
        {children}
    </LearnProvider.Provider>
    );
};


