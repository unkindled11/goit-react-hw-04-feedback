import PropTypes from "prop-types";

import styles from "./statistics.module.css";

const Statistics = ({ good, neutral, bad,total,percentage }) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Good:{good}</p>
            <p className={styles.text}>Neutral:{neutral}</p>
            <p className={styles.text}>Bad:{bad}</p>
            <p className={styles.text}>Total:{total}</p>
            <p className={styles.text}>Percentage:{percentage}%</p>
        </div>
    );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
};