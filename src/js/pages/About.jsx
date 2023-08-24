import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='main-section__heading'>
        <h2>About me</h2>
      </div>
      <div className='main-section__context'>
        <div className='main-section__about-container'>
          <h3>Intro</h3>
          <p>
            I learned how to work, discuss and solve problems in a team, use
            different project management tools such as <span> ClickUp</span>,
            <span> Zendesk</span>, <span> Jira</span>,
            <span> Toggl Track. </span>I created and developed various projects
            using <span> HTML</span>,<span> SCSS</span>,<span> JavaScript</span>
            ,<span> JQuery</span>,<span> React</span>,<span> Redux</span>,
            <span> PHP</span>,<span> Twig</span>,<span> Pantheon</span>,
            <span> Drupal</span>. Being close to clients, I learned how to
            develop relationships, and offer technical guidance and solutions to
            understand their needs.
          </p>
        </div>
        <div className='main-section__about-container'>
          <h3>Education</h3>
          <ul>
            <li>
              <a
                href='https://coderslab.com/en'
                rel='noreferrer'
                target='_blank'
              >
                <span>Coders Lab - IT Academy - Javascript Developer</span>
                <br />
              </a>
              Warsaw Poland, December 2019 - June 2020
              <br />
              Participated in a comprehensive group workshop simulating
              real-world programming scenarios while integrating Scrum
              methodology. Acquired foundational knowledge in JavaScript, React,
              Redux, HTML, CSS/SCSS, and proficiently utilized Linux, macOS, and
              Git for seamless project management. Prepared to excel in dynamic
              programming environments.
            </li>
            <li>
              <span>
                Below honours Degree Level Qualifications: Construction
                Technician
              </span>
              <br />
              A-Level School • Czestochowa Poland • September 2007 - June 2011
            </li>
          </ul>
        </div>
        <div className='main-section__about-container'>
          <h3>Work Experience</h3>
          <ul>
            <li>
              <a href='https://www.3bweb.com/' rel='noreferrer' target='_blank'>
                <span>3B Digital</span>
              </a>
              <br />
              Web Developer • London, United Kingdom • September 2021 -
              September 2022
              <ul>
                <li>
                  Scopes, plans, develops, and test new features for existing
                  projects, and participates in the entire life-cycle of new
                  projects.
                </li>
                <li>
                  Implementing projects based on mock-ups provided by the
                  Graphic Designers' team.
                </li>
                <li>
                  Creation and development of various projects using HTML, SCSS,
                  JavaScript, JQuery, React, Redux, PHP, Twig, and Drupal 7, 8,
                  9.
                </li>
                <li>
                  Sticking to the team's designated plan, discussing and solving
                  problems together.
                </li>
                <li>
                  Assists in implementation services, and solution testing and
                  participates in solution design.
                </li>
                <li>
                  Offers technical guidance, communication, and solutions to
                  submitted tasks.
                </li>
              </ul>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/company/hellofair/'
                rel='noreferrer'
                target='_blank'
              >
                <span>Fair</span>
              </a>
              <br />
              Web Developer • Oxford, United Kingdom • May 2021 - July 2021
              <ul>
                <li>Assisted in developing the company's website.</li>
                <li>Provided ongoing website maintenance.</li>
                <li>
                  Successfully identified, diagnosed, and fixed website
                  problems, including broken links, typographical errors, and
                  formatting issues.
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about'>
                <span>Freelancer</span> <br />
              </Link>
              Web Developer • London, United Kingdom • September 2020 - May 2021
              <ul>
                <li>
                  After graduating from Coders Lab, I developed my knowledge by
                  working on my own projects, solving problems and mistakes,
                  looking for tips and tricks, browsing the internet and Stack
                  Overflow, and using problems and solutions that someone had
                  before me. In addition, on educational platforms such as Udemy
                  and Pluralsight. I broadened my knowledge of the backend and
                  databases.
                </li>
              </ul>
            </li>
            <li>
              <a
                href='https://www.youngs.co.uk/'
                rel='noreferrer'
                target='_blank'
              >
                <span>Young & Co Brewery </span>
                <br />
              </a>
              Assistant Manager • London, United Kingdom • November 2018 - May
              2021
              <ul>
                <li>
                  Organisation and division of labour within the team have
                  resulted in better service and attitude to customers
                </li>
                <li>Monitor and coordinate store inventory</li>
                <li>Supervise and motivate staff to perform their best</li>
                <li>Ensuring the smooth running of the computer system</li>
                <li>Train and assist a team in using the system</li>
              </ul>
            </li>
            <li>
              <Link to='/about'>
                <span>Small Business Owner</span>
                <br></br>
              </Link>
              Częstochowa, Poland • January 2015 - June 2018
              <ul>
                <li>
                  Organisation and division of labour within the team have
                  resulted in better service and attitude to customers
                </li>
                <li>Monitor and coordinate store inventory</li>
                <li>Supervise and motivate staff to perform their best</li>
                <li>Ensuring the smooth running of the computer system</li>
                <li>Train and assist a team in using the system</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='main-section__about-container'>
          <h3>I Like</h3>
          <ul>
            <li>Dance</li>
            <li>Bouldering</li>
            <li>SCUBA Diving</li>
            <li>Meditation</li>
            <li>Chess</li>
            <li>Personal Development</li>
            <li>Gym</li>
            <li>Swimming</li>
            <li>Traveling</li>
          </ul>
        </div>
        <div className='main-section__about-container'>
          <h3>EXPERTISE</h3>
          <ul>
            <li>Attention to Detail</li>
            <li>Problem-solving</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Critical Thinking</li>
            <li>Time Management</li>
            <li>Quantitative Skills</li>
            <li>Emotional Intelligence</li>
          </ul>
        </div>
        <div className='main-section__about-container'>
          <h3>Location</h3>
          <p>Wimbledon, London, United Kingdom</p>
        </div>
      </div>
    </>
  );
};

export default About;
