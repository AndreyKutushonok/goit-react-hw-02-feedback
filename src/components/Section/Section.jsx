import React from "react";
import PropTypes from 'prop-types'
import s from './Section.module.css'

const Section = ({ title, children }) => (
    <section className={s.section}>
        <h2 className=''>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};

export default Section;