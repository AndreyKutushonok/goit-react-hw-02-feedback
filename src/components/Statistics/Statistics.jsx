import React from "react";
import PropTypes from 'prop-types';
import s from './Statistic.module.css'

const Statistics = ({good, neutral, bad, total, positivePercentage}) =>{
    return(
        <div>
            <ul className={s.list}>
                <li><p>Good: {good}</p></li>
                <li><p>Neutral: {neutral}</p></li>
                <li><p>Bad: {bad}</p></li>
                <li><p>Total: {total}</p></li>
                <li><p>Positive feedback: {positivePercentage}%</p></li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics