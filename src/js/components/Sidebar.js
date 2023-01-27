import React from "react";
import picutre from "../../images/me.jpg";
import Footer from "./Footer";

const Sidebar = () => {
  return (
    <section id="sidebar">
      <section id="intro">
        <a className="picture" href="/">
          <img src={picutre} alt="my icon" />
        </a>
        <h2>Piotr Pustuł</h2>
        <p>
          <a href="mailto:piotrpustul@protonmail.ch">
            piotrpustul@protonmail.ch
          </a>
        </p>
      </section>

      <section id="sidebar-about">
        <h2>About</h2>
        <p>
          I learned how to work, discuss and solve problems in a team, use
          different project management tools such as
          <span> ClickUp</span>,<span> Zendesk</span>, <span> Jira</span>,
          <span> Toggl Track.</span> I created and developed various projects
          using <span> HTML</span>,<span> SCSS</span>,<span> JavaScript</span>,
          <span> JQuery</span>,<span> React</span>,<span> Redux</span>,
          <span> PHP</span>,<span> Drupal</span>,<span> Twig</span>,
          <span> Pantheon</span>, . Being close to clients, I learned how to
          develop relationships, and offer technical guidance and solutions to
          understand their needs.
        </p>
      </section>
      <Footer />
    </section>
  );
};

export default Sidebar;
