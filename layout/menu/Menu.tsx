import React, { useContext, useEffect } from 'react';
import styles from './Menu.module.css'; 
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/courses.svg';
import ServicesIcon from './icons/Servicess.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';
import Link from 'next/link';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {  route: 'courses', name: 'Courses', icon: <ProductsIcon/>, id: TopLevelCategory.Courses },
  {  route: 'services', name: 'Services', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
  {  route: 'books', name: 'Books', icon: <BooksIcon/>, id: TopLevelCategory.Books },
  {  route: 'products', name: 'Products', icon: <CoursesIcon/>, id: TopLevelCategory.Products },
];

export const Menu = () : JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`} legacyBehavior>
              <a>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive] : m.id == firstCategory
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
              </a>
            </Link>

              {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(m => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened] : m.isOpened
            })}>{buildThirdLevel(m.pages,  menuItem.route)}</div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      pages.map(p => (
        <Link href={`/${route}/${p.alias}`} legacyBehavior>
          <a className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive] : false
          })}>
            {p.category}
          </a>
        </Link>
      ))
    );
  };

  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};