import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
