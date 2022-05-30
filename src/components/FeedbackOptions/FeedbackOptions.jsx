import PropTypes from "prop-types";

import styles from "./feedbackOptions.module.css";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    
    const elements = options.map(option => (

        <button key={option} type="button" className={styles.btn} onClick={() => onLeaveFeedback(option)}>
            {option}
        </button>
        
    ))

    return (<div className={styles.btnBox}>{elements}</div>)
    
}


export default FeedbackOptions;


FeedbackOptions.defautProps = {
    options: []
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
};
