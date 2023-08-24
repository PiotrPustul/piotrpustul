import React from 'react';
import picutre from '../../images/me.jpg';
import Footer from './Footer';

const Sidebar = () => {
  return (
    <section id='sidebar'>
      <section id='intro'>
        <a className='picture' href='/'>
          <img src={picutre} alt='my icon' />
        </a>
        <h2>Piotr Pustuł</h2>
        <p>
          <a href='mailto:piotrpustul@protonmail.ch'>
            piotrpustul@protonmail.ch
          </a>
        </p>
      </section>

      <section id='sidebar-about'>
        <h2>About</h2>
        <p>
          Motivated by new challenges, I thrive outside my comfort zone. Strong
          organizational and analytical skills make me a valuable asset to any
          team. I adapt quickly and excel in diverse environments, whether
          working independently or collaboratively. Seeking growth
          opportunities, I am poised to contribute and learn in dynamic
          settings.
        </p>
      </section>
      <Footer />
    </section>
  );
};

export default Sidebar;
