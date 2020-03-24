import React from 'react';
import DataContext from 'DataContext';
import Meta from 'components/Meta/Meta';
import Content from 'components/Content';

export const Home = () => {
  const { pages } = React.useContext(DataContext); 
  const { title, subtitle, body } = pages.find(array => array.name === 'home');
  return (
    <React.Fragment>
      <Meta title={title} />
      <div>
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        <Content source={body} />
      </div>
    </React.Fragment>
  );
};