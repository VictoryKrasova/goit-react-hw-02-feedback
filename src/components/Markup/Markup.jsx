import React from "react";
import PropTypes from 'prop-types';
import css from './Markup.module.css'

export const Markup = ({ title, children }) => {
    return (
      <section>
        <div className="container">
          <h2 className={css.title}>{title}</h2>
          {children}
        </div>
      </section>
    );
  };

  Markup.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };