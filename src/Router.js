import React from 'react';
import { BrowserRouter, Route as ReactRoute, Switch } from 'react-router-dom'
import Meta from 'components/Meta/Meta';
import DataContext from 'DataContext';
import { Home } from 'components/Home/Home';
 
const Route = ({ component: Component, ...props}) => (
  <ReactRoute
    {...props}
    render={routeProps => (
      <React.Fragment>
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </React.Fragment>
    )}
  />
);

export const Router = props => {
  const { settings } = React.useContext(DataContext); 
  const { siteDescription } = settings[0];
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} description={siteDescription} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  
};
