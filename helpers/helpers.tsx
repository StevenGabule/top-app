import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import ProductsIcon from "./icons/courses.svg";
import {TopLevelCategory} from "../interfaces/page.interface";
import ServicesIcon from "./icons/Servicess.svg";
import BooksIcon from "./icons/books.svg";
import CoursesIcon from "./icons/services.svg";
import React from "react";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {  route: 'courses', name: 'Courses', icon: <ProductsIcon/>, id: TopLevelCategory.Courses },
  {  route: 'services', name: 'Services', icon: <ServicesIcon/>, id: TopLevelCategory.Services },
  {  route: 'books', name: 'Books', icon: <BooksIcon/>, id: TopLevelCategory.Books },
  {  route: 'products', name: 'Products', icon: <CoursesIcon/>, id: TopLevelCategory.Products },
];