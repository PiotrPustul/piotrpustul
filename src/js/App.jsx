import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container-lg'>
        <Header />
        <section className='sections'>
          <Sidebar />
          <MainSection />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
