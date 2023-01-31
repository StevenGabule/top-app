import React from 'react';
import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';

export const Footer = ({className, ...props}: FooterProps) : JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props} >
      <div>
        OwlTop Copyright 2023 - Practical Programmer
      </div>
      <a href={'#'} target='_blank'>Something URL Goes</a>
      <a href={'#'} target='_blank'>Make blues and clues</a>
    </footer>
  );
};