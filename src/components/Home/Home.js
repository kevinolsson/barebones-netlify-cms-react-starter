import React from 'react';
import DataContext from 'DataContext';
import Meta from 'components/Meta/Meta';
import Content from 'components/Content/Content';
import { Link } from 'react-router-dom'

export const Home = () => {
  const { pages } = React.useContext(DataContext); 
  const { title, subtitle, body } = pages.find(array => array.name === 'home');
  return (
    <React.Fragment>
      <Meta title={title} />
      <div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <Content src={body} />
      </div>
    </React.Fragment>
  );
};