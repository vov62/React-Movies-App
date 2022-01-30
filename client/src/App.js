import React, { useState, useEffect } from 'react';
import Header from './component/Header/navBar';
import HomePage from './pages/HomePage/HomePage';
import Footer from './component/Footer/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

function App(props) {
  // fontAwesome
  library.add(fab, faSearch, faAngleDoubleLeft, faAngleDoubleRight);

  return (
    <React.Fragment>
      <Header />
      <HomePage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
