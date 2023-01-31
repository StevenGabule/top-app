import React, { useContext, useEffect } from 'react';
import styles from './Menu.module.css'; 
import cn from 'classnames';
import { AppContext } from '../../context/app.context';

export const Menu = () : JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  useEffect(() => {
   setMenu && setMenu([]); 
  });
  
  return (
    <div>
      <ul>
        {menu.map((m) => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
      </ul>
    </div>
  );
};