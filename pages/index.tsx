import { GetStaticProps } from "next";
import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components";
import { withLayout } from "../layout/Layout";
import axios from 'axios';
import { MenuItem } from "../interfaces/menu.interface";

function Home ({ menu, firstCategory} : HomeProps) : JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>Text Sample</Htag>
      <Button appearance="primary" arrow="right">Text Button</Button>
      <Button appearance="ghost" arrow="down">Text Button</Button>
      <P size='l'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, aut totam? Dicta, quas expedita odit maiores ad eum soluta fugit? Rerum fugiat fuga esse ratione saepe quibusdam repellat tenetur harum!</P>
      <P size='m'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, aut totam? Dicta, quas expedita odit maiores ad eum soluta fugit? Rerum fugiat fuga esse ratione saepe quibusdam repellat tenetur harum!</P>
      <P size='s'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, aut totam? Dicta, quas expedita odit maiores ad eum soluta fugit? Rerum fugiat fuga esse ratione saepe quibusdam repellat tenetur harum!</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">Red</Tag>
      <Tag size="s" color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <ul>
      {menu.map((m) => (
        <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
      ))}
      </ul>
    </>
  );
}
  
export default withLayout(Home); 

export const getStaticProps: GetStaticProps<HomeProps> = async() => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN+'/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[];
  firstCategory: number
}