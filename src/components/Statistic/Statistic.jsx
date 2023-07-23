import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.module.css';

export const Statistic = ({ props }) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className={css.stats}>
      <ul className={css.list}>
        <li className={css.item}>
          Good<span>{good}</span>
        </li>
        <li className={css.item}>
          Neutral<span>{neutral}</span>
        </li>
        <li className={css.item}>
          Bad<span>{bad}</span>
        </li>
      </ul>
      <div className={css.summary}>
        <p className={css.total}>
          Total<span>{total}</span>
        </p>
        <p className={css.persantage}>
          Positive persantage<span>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistic.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};