import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
import Home from './pages/home';
import Explore from './pages/explore';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Login from './pages/login';
import Register from './pages/register';
import Create from './pages/create';
import Contact from './pages/contact';
import FontAwesomeIcons from './pages/fontAwesomeIcons';
import Tabs from './pages/tabs';


import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0,0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app= () => (
  <div className="wraper">
  <GlobalStyles />
    <Header/>
      <PosedRouter>
      <ScrollTop path="/">
        <Home exact path="/">
          <Redirect to="/home" />
        </Home>
        <Explore path="/explore" />
        <ItemDetail path="/ItemDetail" />
        <Author path="/Author" />
        <Login path="/login" />
        <Register path="/register" />
        <Create path="/create" />
        <Contact path="/contact" />
        <FontAwesomeIcons path="/fontAwesomeIcons" />
        <Tabs path="/tabs" />
     
   
        </ScrollTop>
      </PosedRouter>
    <ScrollToTopBtn />
    
  </div>
);
export default app;