import React from 'react';
import { SidebarProps } from './Sidebar.props';
import { Menu } from '../menu/Menu';
import Logo from '../../public/logo.svg';
import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({className,...props}: SidebarProps) : JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Search</div>
      <Menu />
    </div>
  );
};